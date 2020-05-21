import { Component, OnInit, Injector } from '@angular/core';
import { RaffleDraw, FireLoopRef, RealTime } from '../../../../../common/sdk';
import { OrderByPipe } from '../../../../../common/pipes/order-by/order-by.pipe';
import { Extender } from '../../../../../common/helpers/extender';

@Component({
  providers: [OrderByPipe],
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent extends Extender implements OnInit {

  public raffles: RaffleDraw[] = [];
  public rafflesBackup: RaffleDraw[] | any = [];
  public raffleRef: FireLoopRef<RaffleDraw>;

  constructor(
    protected injector: Injector,
    private _rt: RealTime,
    private orderBy: OrderByPipe
  ) {
    super(injector);
    this._rt.onReady().subscribe(() => { });
  }

  public ngOnInit() {
    this.raffleRef = this._rt.FireLoop.ref<RaffleDraw>(RaffleDraw);
    this.raffleRef.on('change', {
      where: { isDeleted: false, startDate: { gt: new Date() } }, include: 'product'
    }).subscribe((data: RaffleDraw[]) =>
      this.rafflesBackup = this.raffles = data
    );
  }

  public doSearch(val: string): void {

    if (val && val.trim() !== '') {
      this.raffles = this.rafflesBackup.filter((raffle) => raffle.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    } else {
      this.raffles = [...this.rafflesBackup];
    }
  }

  public sort(prop: string, by: string) {
    // sort by asc and desc and by property
    this.raffles = this.orderBy.transform(this.raffles, by + prop);
  }
}
