import { Component, HostBinding, OnInit } from '@angular/core';
import { DialogConfig } from '../../helpers/dialog-config';
import { DialogRef } from '../../helpers/dialog-ref';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  // public modalSize: string = 'sm';
  public config: IAlertConfig = { body: '', footer: '', icon: '', heading: '' };
  public buttons: IAlertButtons = { columnAlign: false, buttons: [{ color: 'secondary', text: 'Continue', eventname: 'close' }] };
  public toolbar: IAlertToolbar = { heading: '', toolbar: false, toolbarIcon: '' };

  constructor(
    private dialogRef: DialogRef,
    public dialogConfig: DialogConfig<IAlertModel>
  ) { }

  public ngOnInit() {

    const data = this.dialogConfig.data;
    this.config = data.config ? data.config : { body: '', footer: '', icon: '', heading: '' };
    this.buttons = data.buttons ? data.buttons : { columnAlign: false, buttons: [{ color: 'secondary', text: 'Continue', eventname: 'close' }] };
    this.toolbar = data.toolbar ? data.toolbar : { heading: '', toolbar: false, toolbarIcon: '' };
  }

  public onClick(event: string): void {
    this.dialogRef.close(event);
  }

}

export interface IAlertModel {
  show?: boolean;
  config?: IAlertConfig;
  buttons?: IAlertButtons;
  toolbar?: IAlertToolbar;
}

export interface IAlertConfig {
  heading?: string;
  body?: string;
  footer?: string;
  icon?: string;
}

export interface IAlertToolbar {
  heading?: string;
  toolbarIcon?: string;
  toolbar: boolean;
}

export interface IAlertButtons {
  columnAlign?: boolean;
  buttons?: { text: string, color: string, eventname: any }[];
}
