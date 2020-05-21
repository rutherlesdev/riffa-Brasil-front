import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogConfig } from '../helpers/dialog-config';
import { DialogInjector } from '../helpers/dialog-injector';
import { DialogRef } from '../helpers/dialog-ref';
import { IAlertModel, AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';

@Injectable()
export class DialogService {

  public dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public open(componentType: Type<any>, config: DialogConfig) {

    const dialogRef = this.appendDialogComponentToBody(config);
    this.dialogComponentRef.instance.childComponentType = componentType;

    return dialogRef;
  }

  public openAlert(config: DialogConfig<IAlertModel>, dialogId = 'alert-dialog') {

    const dialogRef = this.appendDialogComponentToBody(config, dialogId);

    this.dialogComponentRef.instance.childComponentType = AlertDialogComponent;

    return dialogRef;
  }

  private appendDialogComponentToBody(config: DialogConfig, dialogId = null) {
    const map = new WeakMap();
    map.set(DialogConfig, config);

    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    const sub = dialogRef.afterClosed.subscribe(() => {
      // close the dialog
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));

    this._appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    if (dialogId) {
      domElem.id = dialogId;
      domElem.getElementsByClassName('modal')[0].id = `${dialogId}-overlay`;
    }

    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;

    // this.dialogComponentRef.instance..subscribe(() => {
    //   this.removeDialogComponentFromBody();
    // });

    return dialogRef;
  }

  private removeDialogComponentFromBody() {
    this._appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
