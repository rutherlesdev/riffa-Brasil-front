import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { OrderByPipe } from '../../../../../common/pipes/order-by/order-by.pipe';
import { FireLoopRef, RaffleDraw, RealTime } from '../../../../../common/sdk';
import { ITableActions, ITableHeader } from '../../../../../modules/table/models/table';
import { AddRaffleComponent } from '../add-raffle/add-raffle.component';

@Component({
  providers: [OrderByPipe],
  selector: 'app-raffles',
  templateUrl: './raffles.component.html',
  styleUrls: ['./raffles.component.scss']
})
export class RafflesComponent extends Extender implements OnInit {

  public raffles: RaffleDraw[] = [];
  public rafflesBK: any[] = [];
  public tableActions: ITableActions[] = [
    {
      color: 'text-info',
      icon: 'pencil-square-o',
      text: 'Edit',
      event: (data) => { this.addProduct(data); }
    }, {
      color: 'text-danger',
      icon: 'trash-o',
      text: 'Delete',
      event: (data) => { this.delete(data); }
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

  public addProduct(raffle: RaffleDraw = null): void {
    this.dialog.open(AddRaffleComponent, raffle ? { data: raffle } : null);
  }

  private delete(item): void {
    this.dialog.openAlert({
      data: {
        config: {
          heading: 'Delete Raffle',
          body: 'Are you sure you want to delete this raffle?'
        },
        buttons: {
          buttons: [
            { text: 'Delete', color: 'danger', eventname: 'delete' },
            { text: 'Close', color: 'outline-danger', eventname: 'close' }]
        }
      }
    }).afterClosed.subscribe((event) => {
      if (event === 'delete') {
        this.raffleRef.remove(item).subscribe();
      }
    });
  }

  private _getraffles(): void {
    this.loading = true;
    this.raffleRef.on('change', {
      where: { isDeleted: false },
      include: {
        relation: 'product', scope: { where: { isDeleted: false } }
      }
    }).subscribe((data: RaffleDraw[]) => {
      this.raffles = this.rafflesBK = this._orderBy.transform(data, '-updatedAt');
      this.onPageChange(this.currentPage);
      this.loading = false;
    });
  }

}
