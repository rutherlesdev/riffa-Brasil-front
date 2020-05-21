import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { FireLoopRef, RaffleDraw, RealTime } from '../../../../../common/sdk';
import { ITableActions, ITableHeader } from '../../../../../modules/table/models/table';
import { ManageRaffleComponent } from '../manage-raffle/manage-raffle.component';
import { OrderByPipe } from '../../../../../common/pipes/order-by/order-by.pipe';

@Component({
  providers: [OrderByPipe],
  selector: 'app-completed-raffles',
  templateUrl: './completed-raffles.component.html',
  styleUrls: ['./completed-raffles.component.scss']
})
export class CompletedRafflesComponent extends Extender implements OnInit {

  public raffles: RaffleDraw[] = [];
  public rafflesBK: any[] = [];
  public tableActions: ITableActions[] = [
    {
      color: 'text-info',
      icon: 'pencil-square-o',
      text: 'Edit',
      event: (data) => { this.dialog.open(ManageRaffleComponent, { data: data }); }
    }];
  public tableHeaders: ITableHeader[] = [
    {
      text: 'product.images[0]',
      formatted_text: 'Image',
      type: 'image',
    },
    {
      text: 'name',
      formatted_text: 'Name',
      type: 'text',
    },
    {
      text: 'price',
      formatted_text: 'Price',
      type: 'currency',
    },
    {
      text: 'startDate',
      formatted_text: 'Start Date',
      type: 'date',
    },
    {
      text: 'endDate',
      formatted_text: 'End Date',
      type: 'date',
    },
  ];
  public pageSize: number = 10;
  public raffleRef: FireLoopRef<RaffleDraw>;
  public currentPage: number = 1;

  constructor(
    protected injector: Injector,
    private _rt: RealTime,
    private _orderBy: OrderByPipe
  ) {
    super(injector);
    this._rt.onReady().subscribe(() => { });
  }

  public ngOnInit() {
    this.raffleRef = this._rt.FireLoop.ref<RaffleDraw>(RaffleDraw);
    this._getraffles();
  }

  public onPageChange(page): void {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    this.raffles = this.rafflesBK.slice(start, start + this.pageSize);
  }

  private _getraffles(): void {
    this.loading = true;
    this.raffleRef.on('change', {
      where: { isDeleted: false, isCompleted: true },
      include: [
        {
          relation: 'product', scope: { where: { isDeleted: false } }
        },
        {
          relation: 'raffleEntries', scope: { where: { isDeleted: false }, include: 'account' }
        },
        {
          relation: 'raffleWinners', scope: { where: { isDeleted: false } }
        }]

    }).subscribe((data: RaffleDraw[]) => {
      this.raffles = this.rafflesBK = this._orderBy.transform(data, '-updatedAt');
      this.onPageChange(this.currentPage);
      this.loading = false;
    });
  }
}
