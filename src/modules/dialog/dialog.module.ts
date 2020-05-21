import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogInsertionDirective } from './directives/dialog-insertion.directive';
import { DialogConfig } from './helpers/dialog-config';
import { DialogRef } from './helpers/dialog-ref';
import { DialogService } from './services/dialog.service';

@NgModule({
  declarations: [
    DialogComponent,
    DialogInsertionDirective,
    AlertDialogComponent
  ],
  entryComponents: [
    DialogComponent,
    AlertDialogComponent
  ],
  exports: [
    DialogComponent,
    AlertDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialogModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DialogModule,
      providers: [DialogService, DialogConfig, DialogRef]
    };
  }
}
