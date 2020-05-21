import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TdTextEditorComponent } from '@covalent/text-editor';
import * as cloneDeep from 'lodash.clonedeep';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Extender } from '../../../../../common/helpers/extender';
import { Product, ProductApi } from '../../../../../common/sdk';
import { environment } from '../../../../../environments/environment';
import { DialogConfig } from '../../../../../modules/dialog/helpers/dialog-config';
import { DialogRef } from '../../../../../modules/dialog/helpers/dialog-ref';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent extends Extender implements OnInit {

  public modalSize: string = 'lg';
  public product: Product = new Product();
  public images: { url: any, show: boolean }[] = [];
  public files: File[] = [];
  @ViewChild('form') public form: NgForm;
  private imgUrl = `${environment.server.BASE_URL}/${environment.server.API_VERSION}/Containers/container`;
  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;

  constructor(
    protected injector: Injector,
    private _http: HttpClient,
    private _dialogRef: DialogRef,
    private _dialogConfig: DialogConfig,
    private _productApi: ProductApi
  ) {
    super(injector);
  }

  public ngOnInit() {
    const data: Product = this._dialogConfig.data;
    if (data) {
      this.product = cloneDeep(data);
    }
    this.product.images ? this.product.images.map((image) => this.images.push({ url: image, show: false })) : null;
  }

  public addImage(event) {
    if (event.target.files.length > 0) {
      const _fileList = [].slice.call(event.target.files);
      _fileList.forEach((file) => {
        this.files.push(file);
        this.createFileUrl(file);
      });
      delete event.target.files;
    }
  }

  public createFileUrl(file: File) {
    const reader: FileReader = new FileReader();
    reader.addEventListener('load', () => {
      if (this.product !== null && this.product !== undefined) {
        this.images.push({ url: reader.result, show: false });
      }
    });
    reader.readAsDataURL(file);
  }

  public save(): void {
    this.loading = true;
    const formData: FormData = new FormData();
    const uploadUrl = `${this.imgUrl}/upload`;

    if (this.form.valid) {
      if (this.files.length > 0) {
        this._uploadImages(formData, this.imgUrl, uploadUrl).subscribe(() => this.upsertProduct());
      } else {
        this.upsertProduct();
      }
    }
  }

  private upsertProduct() {
    this.product.description = this._textEditor.value;
    this._productApi.upsert(this.product)
      .subscribe((_data) => {
        this.loading = false;
        this._reset();
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.toastr.error(error.message);
      });
  }

  private _reset() {
    this.form.resetForm();
    this._textEditor.value = '';
    this.files = [];
    this.product = new Product();
    this.images = [];
  }

  public deleteFile(file, i) {
    if (/data:image\/([a-zA-Z]*);base64,([^\"]*)/.test(file.url)) {
      this.images.splice(i, 1);
    } else {
      this._http.delete(`${file.url.replace('download', 'files')}`).subscribe(() => {
        const index = this.product.images.findIndex((image) => image === `${file.url.replace('download', 'files')}`);
        this.product.images.splice(index, 1);
        this.images.splice(i, 1);
      });
    }
  }

  public closeModal(): void {
    this._dialogRef.close();
  }

  private _uploadImages(formData: FormData, url: string, uploadUrl: string) {

    this.files.forEach((file) => {
      formData.append('uploads', file, file.name);
      if (!this.product.images) {
        this.product.images = [];
      }
      this.product.images.push(`${url}/download/${file.name}`);
    });
    return this._http.post(uploadUrl, formData)
      .pipe(finalize(() => this.loading = false));
  }

}
