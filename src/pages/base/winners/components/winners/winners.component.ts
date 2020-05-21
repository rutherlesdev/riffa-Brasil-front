import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { OrderByPipe } from '../../../../../common/pipes/order-by/order-by.pipe';
import { FireLoopRef, RaffleEntry, RealTime } from '../../../../../common/sdk';
import { CommonService } from '../../../../../common/services/common/common.service';

@Component({
  providers: [OrderByPipe],
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent extends Extender implements OnInit {
  public raffleEntries: RaffleEntry[] = [];
  public raffleEntriesBackup: RaffleEntry[] | any = [];
  public raffleEntryRef: FireLoopRef<RaffleEntry>;
  public useDummy: any;

  constructor(
    protected injector: Injector,
    private _rt: RealTime,
    private commonService: CommonService,
    private orderBy: OrderByPipe
  ) {
    super(injector);
    this._rt.onReady().subscribe(() => {});
  }

  public ngOnInit() {
    this.raffleEntryRef = this._rt.FireLoop.ref<RaffleEntry>(RaffleEntry);
    this.raffleEntryRef
      .on('change', {
        where: { isWinningEntry: true, isDeleted: false },
        include: [{ account: 'contact' }, { raffleDraw: 'product' }]
      })
      .subscribe(
        (data: RaffleEntry[]) =>
          (this.raffleEntriesBackup = this.raffleEntries = data)
      );

    this.commonService.useWinnersDummyData.subscribe((res) => {
      if (res) {
        this.commonService.getWinners().subscribe((items: any) => {
          this.raffleEntriesBackup = this.raffleEntries = items;
        });
      }
    });
  }

  public doSearch(val: string): void {
    if (val && val.trim() !== '') {
      this.raffleEntries = this.raffleEntriesBackup.filter(
        (raffle) => raffle.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
      );
    } else {
      this.raffleEntries = [...this.raffleEntriesBackup];
    }
  }

  public sort(prop: string, by: string) {
    // sort by asc and desc and by property
    this.raffleEntries = this.orderBy.transform(this.raffleEntries, by + prop);
  }
}
