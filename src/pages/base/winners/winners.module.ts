import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';
import { WinitCommonModule } from '../../../common/common.module';
import { AuthModule } from '../../../modules/auth/auth.module';
import { DialogModule } from '../../../modules/dialog/dialog.module';
import { FormFieldModule } from '../../../modules/form-field/form-field.module';
import { WinnersComponent } from './components/winners/winners.component';

@NgModule({
  declarations: [WinnersComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    FormsModule,
    FormFieldModule,
    MomentModule,
    AuthModule,
    DialogModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: WinnersComponent
      }
    ])
  ]
})
export class WinnersModule {}
