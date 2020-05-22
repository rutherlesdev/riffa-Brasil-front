import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Extender } from '../../../../../common/helpers/extender';
import { CustomCurrencyPipe } from '../../../../../common/pipes/currency/custom-currency.pipe';
import {
  Invitation,
  InvitationApi,
  RaffleDraw,
  RaffleEntry,
  RaffleEntryApi
} from '../../../../../common/sdk';
import { PaymentApi } from '../../../../../common/sdk/services/custom/Payment';
import { environment } from '../../../../../environments/environment';
import { DialogConfig } from '../../../../../modules/dialog/helpers/dialog-config';
import { DialogRef } from '../../../../../modules/dialog/helpers/dialog-ref';

const stripe = (window as any).Stripe(environment.STRIPE_PUB_KEY);
const elements = stripe.elements();
const cardElement = elements.create('card', {
  style: {
    base: {
      // iconColor: '#666EE8',
      color: '#31325F',
      fontWeight: 300,
      fontFamily: '"Montserrat", Helvetica, sans-serif',
      fontSize: '18px',
      '::placeholder': {
        color: '#CFD7E0'
      }
    }
  }
});

@Component({
  providers: [CustomCurrencyPipe],
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent extends Extender implements OnInit {
  public name: string;
  public address: any = null;
  public cardElement = cardElement;
  public raffleEntries: number[];
  public raffle: RaffleDraw;
  @ViewChild('form') private form: NgForm;
  public hasInviteDiscount: boolean;
  public amount: number;
  public discountClaimed: boolean;
  public invite: Invitation;
  public progress: number = 180000;

  constructor(
    protected injector: Injector,
    private _dialogRef: DialogRef,
    private _dialogConfig: DialogConfig,
    private _paymentApi: PaymentApi,
    private _raffleEntryApi: RaffleEntryApi,
    private _invitationApi: InvitationApi,
    private _currency: CustomCurrencyPipe
  ) {
    super(injector);
  }

  public get entries() {
    return this._dialogConfig.data.entries;
  }

  public ngOnInit() {
    this.cardElement.mount('#card-element');
    this.name =
      this.currentUser.contact.firstName +
      ' ' +
      this.currentUser.contact.lastName;
    this.raffle = this._dialogConfig.data.raffle;
    this.raffleEntries = this._dialogConfig.data.entries.map(
      (e) => e.entryNumber
    );
    this.getInvites();
    this.amount = this.raffleEntries.length * this.raffle.price;

    setInterval(() => {
      if (this.progress <= 0) {
        this.progress = 180000;
      }
      this.progress = this.progress - 1000;
    }, 1000);
  }

  public buy() {
    this.loading = true;
    this.checkRaffleEntriesB4Payment().then((isTaken) => {
      if (isTaken) {
        this.toastr.warning(
          'Your Raffle Entries have already been taken, please select new raffle numbers'
        );
        this._dialogRef.close();
        this.loading = false;
      } else {
        this._makePayment();
      }
    });
  }

  public claimDiscount() {
    this.discountClaimed = true;
    this.amount = this._getDiscount(
      this.raffleEntries.length * this.raffle.price
    );
  }

  private getInvites(): void {
    this._invitationApi
      .findOne({
        where: {
          or: [
            {
              hasSignedUp: true,
              isDeleted: false,
              receiverEmail: this.currentUser.email,
              receiverClaimed: false
            },
            {
              hasSignedUp: true,
              isDeleted: false,
              accountId: this.currentUser.id,
              senderClaimed: false
            }
          ]
        }
      })
      .subscribe((res: Invitation) => {
        this.invite = res;
        this.hasInviteDiscount = res.id ? true : false;

        this._invitationApi
          .findOne({
            where: {
              hasSignedUp: true,
              isDeleted: false,
              accountId: this.currentUser.id,
              senderClaimed: true
            }
          })
          .subscribe((resp) => {
            if (resp) {
              this.hasInviteDiscount = false;
            }
          });
      });
  }

  private _getDiscount(amount): number {
    return amount - 5;
  }

  private _makePayment() {
    this._paymentApi
      .start({
        amount: this.amount * 100,
        currency: 'brl'
      })
      .subscribe(
        (res) => {
          stripe
            .handleCardPayment(res.client_secret, this.cardElement, {
              payment_method_data: {
                billing_details: {
                  name: this.name
                }
              },
              receipt_email: this.currentUser.email
            })
            .then((result) => {
              this.loading = false;
              if (result.error) {
                // Display error.message in your UI.
                this.toastr.error(result.error.message);
              } else {
                this._updateInvite();
                this._dialogRef.close('success');
                this.dialog.openAlert({
                  data: {
                    config: {
                      heading: 'Pagamento bem sucedido',
                      body: `Você efetuou um pagamento de ${this._currency.transform(
                        this.amount
                      )} for ${this.raffleEntries.length} Rifas`
                    }
                  }
                });
              }
            });
        },
        (error: HttpErrorResponse) => {
          this.toastr.error(error.message);
        }
      );
  }

  private _updateInvite() {
    if (this.invite && this.invite.accountId === this.currentUser.id) {
      this.invite.senderClaimed = true;
    } else if (
      this.invite &&
      this.invite.receiverEmail === this.currentUser.email
    ) {
      this.invite.receiverClaimed = true;
    }
    this._invitationApi.upsert(this.invite).subscribe();
  }

  public closeModal(): void {
    this._dialogRef.close();
  }

  private checkRaffleEntriesB4Payment() {
    return new Promise((resolve, reject) => {
      this._raffleEntryApi
        .find({ where: { raffleDrawId: this.raffle.id, isDeleted: false } })
        .subscribe((data: RaffleEntry[]) => {
          const raffleEntry = !!data.find((e) =>
            this.raffleEntries.includes(e.entryNumber)
          );
          resolve(raffleEntry);
        });
    });
  }
}
