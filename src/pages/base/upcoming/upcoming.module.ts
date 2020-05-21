import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WinitCommonModule } from '../../../common/common.module';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

@NgModule({
  declarations: [UpcomingComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UpcomingComponent
      }
    ])
  ]
})
export class UpcomingModule { }
