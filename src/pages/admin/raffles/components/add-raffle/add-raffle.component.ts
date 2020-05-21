import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TdTextEditorComponent } from '@covalent/text-editor';
import * as cloneDeep from 'lodash.clonedeep';
import { Extender } from '../../../../../common/helpers/extender';
import { Product, ProductApi, RaffleDraw, RaffleDrawApi } from '../../../../../common/sdk';
import { DatePickerDirective } from '../../../../../modules/date-picker/directives/date-picker.directive';
import { DialogConfig } from '../../../../../modules/dialog/helpers/dialog-config';
import { DialogRef } from '../../../../../modules/dialog/helpers/dialog-ref';
import { ITableActions } from '../../../../../modules/table/models/table';

@Component({
  selector: 'app-add-raffle',
  templateUrl: './add-raffle.component.html',
  styleUrls: ['./add-raffle.component.scss']
})
export class AddRaffleComponent extends Extender implements OnInit {

  public modalSize: string = 'lg';
  public raffle: RaffleDraw = new RaffleDraw();
  public products: Product[] = [];
  public productsBK: Product[] = [];
  public raffleProduct: Product;
  public tableActions: ITableActions[] = [
    {
      color: 'text-info',
      icon: 'plus',
      text: 'Edit',
      event: (data, i) => { this.addProduct(data); }
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
  public pageSize: number = 5;
  public showProductTable: boolean;
  public categories: string[] = [
    'Cash', 'Cars', 'Tech', 'Holidays', 'Lifestyle'
  ];
  @ViewChild('form') public form: NgForm;
  @ViewChild('wrapper') public wrapper: ElementRef;
  @ViewChild('textDescEditor') private _textDescEditor: TdTextEditorComponent;
  @ViewChild('textTermsEditor') private _textTermsEditor: TdTextEditorComponent;
  @ViewChild('startDate') private _pikaStartDate: DatePickerDirective;
  @ViewChild('endDate') private _pikaEndDate: DatePickerDirective;
  constructor(
    protected injector: Injector,
    private _dialogRef: DialogRef,
    private _dialogConfig: DialogConfig,
    private _raffleApi: RaffleDrawApi,
    private _productApi: ProductApi
  ) {
    super(injector);
  }

  public ngOnInit() {
    const data: RaffleDraw = this._dialogConfig.data;
    if (data) {
      this.raffle = cloneDeep(data);
      this.raffleProduct = data.product;
      delete this.raffle.product;
    }
    this._getproducts();
  }

  public isSelected(item): boolean {
    return this.raffleProduct ? this.raffleProduct.id === item.id : false;
  }

  public onPageChange(page): void {
    const start = (page - 1) * this.pageSize;
    this.products = this.productsBK.slice(start, start + this.pageSize);
  }

  public addProduct(item): void {
    this.raffleProduct = item;
    this.raffle.productId = item.id;
  }

  public removeProduct(): void {
    this.raffleProduct = null;
    this.raffle.productId = null;
  }

  public save(): void {
    if (this.form.valid && this.raffleProduct) {
      this.loading = true;
      this.raffle.description = this._textDescEditor.value;
      this.raffle.terms = this._textTermsEditor.value;
      this._raffleApi.upsert(this.raffle).subscribe(() => {
        this.loading = false;
        this._reset();
      },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.toastr.error(error.message);
        });
    }
  }

  private _reset() {
    this.form.resetForm();
    this._textDescEditor.value = '';
    this._textTermsEditor.value = '';
    this.raffle = new RaffleDraw();
    this.raffleProduct = null;
    this._pikaStartDate.clear();
    this._pikaEndDate.clear();
    this.showProductTable = false;
    this.wrapper.nativeElement.scrollTop = 0;
  }

  public closeModal(): void {
    this._dialogRef.close();
  }

  private _getproducts(): void {
    this._productApi.find({ where: { isDeleted: false } }).subscribe((data: Product[]) => {
      this.products = this.productsBK = data.map((product: any) => {
        product.mainImage = product.images[0];
        return product;
      });
    });
  }

}
