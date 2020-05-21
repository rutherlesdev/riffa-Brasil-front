import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, Type, ViewChild } from '@angular/core';
import { DialogInsertionDirective } from '../../directives/dialog-insertion.directive';
import { DialogConfig } from '../../helpers/dialog-config';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  public size: string;
  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;

  @ViewChild(DialogInsertionDirective) public insertionPoint: DialogInsertionDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private _cd: ChangeDetectorRef,
    // private _dialogConfig: DialogConfig
  ) { }

  public ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.size = this.componentRef.instance.modalSize || 'md';
    document.body.classList.add('modal-open');
    this._cd.detectChanges();
  }

  public loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  public onOverlayClicked() {
    // close the dialog
  }

  public onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }
}
