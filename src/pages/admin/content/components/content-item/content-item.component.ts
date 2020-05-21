import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as cloneDeep from 'lodash.clonedeep';
import { Extender } from '../../../../../common/helpers/extender';
import { Content, ContentApi } from '../../../../../common/sdk';
import { DialogConfig } from '../../../../../modules/dialog/helpers/dialog-config';
import { DialogRef } from '../../../../../modules/dialog/helpers/dialog-ref';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent extends Extender implements OnInit {

  public modalSize: string = 'lg';
  public contentTypes = [
    'Homepage Left content',
    'Homepage Right content',
    'Footer nav Menu'
  ];
  public contentModel: Content = new Content();
  @ViewChild('form') public form: NgForm;

  constructor(
    protected injector: Injector,
    private _dialogRef: DialogRef,
    private _dialogConfig: DialogConfig,
    private _contentApi: ContentApi
  ) {
    super(injector);
  }

  public ngOnInit() {
    const data: Content = this._dialogConfig.data;
    if (data) {
      this.contentModel = cloneDeep(data);
    }
  }

  public save(): void {
    this.loading = true;
    this._contentApi.upsert(this.contentModel)
      .subscribe((_data) => {
        this.loading = false;
        this.form.resetForm();
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.toastr.error(error.message);
      });
  }

  public closeModal(): void {
    this._dialogRef.close();
  }

}
