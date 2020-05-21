import { Component, Injector, Input, OnInit } from '@angular/core';
import { AuthComponent } from '../../../modules/auth/components/auth/auth.component';
import { Extender } from '../../helpers/extender';
import { ContactApi, RaffleDraw } from '../../sdk';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent extends Extender implements OnInit {
  @Input() public raffle: RaffleDraw;
  public timeElapsed: number;
  public today = new Date();
  public startDate: Date;
  public entriesLeft: number;
  public endDate: Date;

  constructor(protected injector: Injector, private _contactApi: ContactApi) {
    super(injector);
  }

  public get hasRaffle(): boolean {
    if (this.currentUser) {
      return this.currentUser.contact.raffleDraws
        ? !!this.currentUser.contact.raffleDraws.find(
            (raffle) => raffle.id === this.raffle.id
          )
        : false;
    }
    return false;
  }

  public ngOnInit() {
    if (this.raffle.raffleEntries) {
      this.entriesLeft = Math.round(
        this.raffle.maxOptions - this.raffle.raffleEntries.length
      );
    }
    // this.timeElapsed = Math.round((new Date(this.raffle.endDate).getDate() - new Date().getDate()) * 100) / new Date().getDate();
    this.startDate = new Date(this.raffle.startDate);
    this.endDate = new Date(this.raffle.endDate);
  }

  public addToProfile(): void {
    if (this.currentUser) {
      this._contactApi
        .linkRaffleDraws(this.currentUser.contact.id, this.raffle.id)
        .subscribe(() => {
          !this.currentUser.contact.raffleDraws
            ? (this.currentUser.contact.raffleDraws = [])
            : null;
          this.currentUser.contact.raffleDraws.push(this.raffle);
        });
    } else {
      this.dialog.open(AuthComponent, { data: { size: 'md', form: 'login' } });
    }
  }

  public removeFromProfile(): void {
    this._contactApi
      .unlinkRaffleDraws(this.currentUser.contact.id, this.raffle)
      .subscribe(() => {
        const rafIndex = this.currentUser.contact.raffleDraws.findIndex(
          (raffle) => raffle.id === this.raffle.id
        );
        this.currentUser.contact.raffleDraws.splice(rafIndex, 1);
      });
  }
}
