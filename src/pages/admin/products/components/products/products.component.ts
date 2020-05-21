import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { OrderByPipe } from '../../../../../common/pipes/order-by/order-by.pipe';
import { FireLoopRef, Product, RealTime } from '../../../../../common/sdk';
import { ITableActions } from '../../../../../modules/table/models/table';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  providers: [OrderByPipe],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends Extender implements OnInit {

  public products: any[] = [];
  public tableActions: ITableActions[] = [
    {
      color: 'text-info',
      icon: 'pencil-square-o',
      text: 'Edit',
      event: (data, i) => { this.addProduct(data); }
    }, {
      color: 'text-danger',
      icon: 'trash-o',
      text: 'Delete',
      event: (data, i) => { this.delete(data); }
    }];
  public tableHeaders: any[] = [{
    text: 'images[0]',
    formatted_text: 'Image',
    type: 'image',
  },
  {
    text: 'name',
    formatted_text: 'Name',
    type: 'text',
  }
  ];
  public pageSize: number = 10;
  public productsBK: any[] = [];
  public productRef: FireLoopRef<Product>;
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
    this.productRef = this._rt.FireLoop.ref<Product>(Product);
    this._getproducts();
  }

  public onPageChange(page): void {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    this.products = this.productsBK.slice(start, start + this.pageSize);
  }

  public addProduct(product: Product = null): void {
    this.dialog.open(AddProductComponent, product ? { data: product } : null);
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
        this.productRef.remove(item).subscribe();
      }
    });
  }

  private _getproducts(): void {
    this.loading = true;
    this.productRef.on('change', { where: { isDeleted: false } }).subscribe((data: Product[]) => {
      this.products = this.productsBK = this._orderBy.transform(data, '-updatedAt');
      this.onPageChange(this.currentPage);
      this.loading = false;
    });
  }
}
