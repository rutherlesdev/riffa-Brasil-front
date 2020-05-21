import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { AccountApi, RaffleDraw, RaffleDrawApi, RaffleEntry, RaffleWinner, RaffleWinnerApi } from '../../../../../common/sdk';
import { DialogConfig } from '../../../../../modules/dialog/helpers/dialog-config';
import { DialogRef } from '../../../../../modules/dialog/helpers/dialog-ref';

@Component({
  selector: 'app-manage-raffle',
  templateUrl: './manage-raffle.component.html',
  styleUrls: ['./manage-raffle.component.scss']
})
export class ManageRaffleComponent extends Extender implements OnInit {

  public modalSize: string = 'lg';
  public raffle: RaffleDraw = new RaffleDraw();
  public entries: RaffleEntry[];
  public winners: RaffleEntry[] = [];
  public raffleWinners: RaffleWinner[];
  public loosers: string[];

  constructor(
    protected injector: Injector,
    private _dialogRef: DialogRef,
    private _dialogConfig: DialogConfig,
    private _raffleApi: RaffleDrawApi,
    private _accountApi: AccountApi,
    private _raffleWinnerApi: RaffleWinnerApi
  ) {
    super(injector);
  }

  public ngOnInit() {
    this.raffle = this._dialogConfig.data;
    this.raffleWinners = this.raffle.raffleWinners ? this.raffle.raffleWinners : [];
    this.getRaffleEntries();
  }

  public getWinningNumbers(): void {
    this.loading = true;
    this._raffleWinnerApi.getWinningNumbers(this.raffle)
      .subscribe((res: { raffle: RaffleDraw, raffleWinners: RaffleWinner[] }) => {
        this.raffleWinners = res.raffleWinners;
        this.winners = this.entries.filter((entry) => {
          if (!!this.raffleWinners.find((winner) => entry.entryNumber === winner.winningNumber)) {
            return entry;
          }
        });
        this.raffle = Object.assign(this.raffle, res.raffle);
        this.getLoosersEmail();
        this.loading = false;
      },
        (error) => { this.loading = false; console.log(error); });
  }

  public getRaffleEntries(): void {
    this._raffleApi.getRaffleEntries(this.raffle.id, { include: { 'account': 'contact' } })
      .subscribe((res: RaffleEntry[]) => {
        this.entries = res;
        const winningNumbers = this.raffleWinners.map((entry) => entry.winningNumber);
        this.winners = this.entries.filter((entry) => {
          if (winningNumbers.includes(entry.entryNumber)) {
            return entry;
          }
        });
      });
  }

  public getLoosersEmail(): void {
    const winningUsers = this.winners.map((winner) => winner.account.email);
    const winningNumbers = this.raffleWinners.map((entry) => entry.winningNumber);
    this.loosers = this.entries.filter((entry) => {
      if (!winningNumbers.includes(entry.entryNumber)) {
        return entry;
      }
    }).map((entry) => entry.account.email);
    this.loosers = this.loosers.reduce((x, y) => x.includes(y) ? x : [...x, y], []);
    this.loosers.filter((email) => !winningUsers.includes(email));
    this.loading = true;
    const emailData = {
      subject: `Better luck next time!`,
      content: `
      
      `
    };
    this._accountApi.sendEmail({ emails: this.loosers, emailData }).subscribe(() => {
      this.loading = false;
      this.toastr.success('Email sent');
    });
  }

  public send(entry: RaffleEntry[]): void {
    this.loading = true;
    const emailData = {
      subject: `You are the winner of ${this.raffle.name}!`,
      content: `
      
      `
    };

    const emails = entry.map((_entry) => _entry.account.email);
    this._accountApi.sendEmail({ emails, emailData }).subscribe(() => {
      this.loading = false;
      this.toastr.success('Email sent');
    });
  }

  public closeModal(): void {
    this._dialogRef.close();
  }

}
