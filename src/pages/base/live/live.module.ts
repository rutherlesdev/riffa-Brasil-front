import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { WinitCommonModule } from '../../../common/common.module';
import { AuthModule } from '../../../modules/auth/auth.module';
import { DialogModule } from '../../../modules/dialog/dialog.module';
import { FormFieldModule } from '../../../modules/form-field/form-field.module';
import { LiveItemComponent } from './components/live-item/live-item.component';
import { LiveComponent } from './components/live/live.component';
import { PaymentComponent } from './components/payment/payment.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [LiveComponent, LiveItemComponent, PaymentComponent],
  entryComponents: [PaymentComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    FormsModule,
    FormFieldModule,
    MomentModule,
    MarkdownModule.forChild(),
    AuthModule,
    NgbPopoverModule,
    DialogModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: LiveComponent
      },
      {
        path: ':id',
        component: LiveItemComponent
      }
    ])
  ]
})
export class LiveModule { }
