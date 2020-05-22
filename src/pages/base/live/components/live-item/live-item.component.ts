import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import {
  FireLoopRef,
  RaffleDraw,
  RaffleDrawApi,
  RaffleEntry,
  RealTime
} from '../../../../../common/sdk';
import { AuthComponent } from '../../../../../modules/auth/components/auth/auth.component';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-live-item',
  templateUrl: './live-item.component.html',
  styleUrls: ['./live-item.component.scss']
})
export class LiveItemComponent extends Extender implements OnInit, OnDestroy {
  public raffle: RaffleDraw = new RaffleDraw();
  public selectionIndex: number = 0;
  public timeElapsed: number;
  public entries: RaffleEntry[];
  public entriesAsNumberArray: number[];
  public userEntries: number[] = [];
  public raffleEntriesRef: FireLoopRef<RaffleEntry>;
  public entriesLeft: number;
  public timerInterval: any;
  public deadline: {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
  };
  public luckyDipSelection: number;
  private luckyDipNumbers: number[] = [];

  constructor(
    protected injector: Injector,
    private _rt: RealTime,
    private _raffleApi: RaffleDrawApi
  ) {
    super(injector);
    this._rt.onReady().subscribe(() => {});
  }

  public get isEnded() {
    return new Date(this.raffle.endDate) < new Date();
  }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((param) => this.getRaffle(param.id));
    this.raffleEntriesRef = this._rt.FireLoop.ref<RaffleEntry>(RaffleEntry);
  }

  public ngOnDestroy(): void {
    clearInterval(this.timerInterval);
    this._rt.onDisconnect();
  }

  public getRaffle(id: string): void {
    this._raffleApi
      .findById(id, {
        where: { isDeleted: false },
        include: ['product', 'raffleEntries']
      })
      .subscribe((data: RaffleDraw) => {
        this.raffle = data;
        this.entriesLeft = Math.round(
          this.raffle.maxOptions - this.raffle.raffleEntries.length
        );

        this.setupTimer(this.raffle);
        this.raffleEntriesRef
          .on('change', {
            where: { isDeleted: false, raffleDrawId: this.raffle.id }
          })
          .subscribe((rafEntry: RaffleEntry[]) => {
            this.entries = rafEntry;
            this.entriesAsNumberArray = rafEntry.map(
              (entry) => entry.entryNumber
            );
          });
      });
  }

  public scrollTo(item: string): void {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    }
  }

  public verifyPay() {
    if (!this.loggedIn) {
      this.dialog.open(AuthComponent, { data: { size: 'md', form: 'login' } });
    } else {
      this.dialog
        .openAlert({
          data: {
            config: {
              body: ` Parabéns Você escolheu os números para ${this.raffle.name} Rifa`,
              footer: `<h4> 
                
                 </h4>`
            },
            buttons: {
              buttons: [
                {
                  color: 'outline-danger',
                  text: 'Cancelar',
                  eventname: 'close'
                },
                {
                  color: 'secondary',
                  text: 'Pagar',
                  eventname: 'payment'
                }
              ]
            }
          }
        })
        .afterClosed.subscribe((data) => {
          if (data === 'payment') {
            const raffleEntries = this.userEntries
              .filter(
                (obj) =>
                  this.entries
                    .map((entry) => entry.entryNumber)
                    .indexOf(obj) === -1
              )
              .map(
                (entry) =>
                  new RaffleEntry({
                    entryNumber: entry,
                    accountId: this.currentUser.id,
                    isLuckyDip: this.luckyDipNumbers.includes(entry)
                  })
              );
            this.dialog
              .open(PaymentComponent, {
                data: { entries: raffleEntries, raffle: this.raffle }
              })
              .afterClosed.subscribe((payment) => {
                if (payment === 'success') {
                  this._raffleApi
                    .createManyRaffleEntries(this.raffle.id, raffleEntries)
                    .subscribe(() => {
                      // this.userEntries = [];
                      this.luckyDipNumbers = [];
                    });
                }
              });
          }
        });
    }
  }

  public doLuckyDip(): void {
    if (this.luckyDipSelection <= this.raffle.maxUserSelection) {
      this.userEntries = [];
      let i = 1;
      while (i <= this.luckyDipSelection) {
        const number = this.generateRandomNumber(this.raffle.maxOptions);
        if (
          !this.userEntries.includes(number) &&
          !this.entriesAsNumberArray.includes(number)
        ) {
          this.luckyDipNumbers.push(number);
          this.userEntries.push(number);
          i++;
        }
      }
    }
    // for (let index = 0; index < this.luckyDipSelection; index++) {
    //   this.userEntries.push(this.generateRandomNumber(this.raffle.maxOptions))
    // }
  }

  public get hasNewEntries(): boolean {
    if (this.userEntries) {
      const data = this.userEntries.filter(
        (obj) =>
          this.entries.map((entry) => entry.entryNumber).indexOf(obj) === -1
      );
      return data.length > 0 ? true : false;
    }
    return false;
  }

  private setupTimer(item: RaffleDraw): void {
    const deadlineTime = new Date(item.endDate).getTime();
    const currentTime = new Date().getTime();
    const interval = 1000;
    let duration;

    duration = deadlineTime - currentTime;

    this.timerInterval = setInterval(() => {
      duration = Math.abs(duration - interval);
      this.deadline = {
        seconds: Math.floor((duration / 1000) % 60),
        minutes: Math.floor((duration / 1000 / 60) % 60),
        hours: Math.floor((duration / (1000 * 60 * 60)) % 24),
        days: Math.floor(duration / (1000 * 60 * 60 * 24))
      };
    }, interval);
  }

  private generateRandomNumber(end) {
    return Math.floor(Math.random() * end) + 1 ;
  }
}
