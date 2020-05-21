import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { FireLoopRef, RaffleDraw, RealTime } from '../../../../../common/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Extender implements OnInit {
  public raffles: RaffleDraw[] | any = null;
  public raffleRef: FireLoopRef<RaffleDraw>;

  constructor(protected injector: Injector, private _rt: RealTime) {
    super(injector);
    this._rt.onReady().subscribe(() => {});
  }

  public ngOnInit() {
    this.raffleRef = this._rt.FireLoop.ref<RaffleDraw>(RaffleDraw);
    this.raffleRef
      .on('change', {
        where: {
          isDeleted: false,
          endDate: { gt: new Date() },
          startDate: { lt: new Date() },
          isFeatured: true
        },
        include: 'product'
      })
      .subscribe((data: RaffleDraw[]) => (this.raffles = data));
  }
}
