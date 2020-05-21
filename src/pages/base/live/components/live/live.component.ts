import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { OrderByPipe } from '../../../../../common/pipes/order-by/order-by.pipe';
import { FireLoopRef, RaffleDraw, RaffleDrawApi, RealTime } from '../../../../../common/sdk';

@Component({
  providers: [OrderByPipe],
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent extends Extender implements OnInit {

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
      where: { isDeleted: false, endDate: { gt: new Date() }, startDate: { lt: new Date() } }, include: ['product', 'raffleEntries']
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
