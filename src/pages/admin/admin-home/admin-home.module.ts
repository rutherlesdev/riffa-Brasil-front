import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { WinitCommonModule } from '../../../common/common.module';
import { DialogModule } from '../../../modules/dialog/dialog.module';
import { FormFieldModule } from '../../../modules/form-field/form-field.module';
import { TableModule } from '../../../modules/table/table.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CompletedRafflesComponent } from './components/completed-raffles/completed-raffles.component';
import { IncompleteRafflesComponent } from './components/incomplete-raffles/incomplete-raffles.component';
import { ManageRaffleComponent } from './components/manage-raffle/manage-raffle.component';

@NgModule({
  declarations: [AdminHomeComponent, CompletedRafflesComponent, IncompleteRafflesComponent, ManageRaffleComponent],
  entryComponents: [ManageRaffleComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    TableModule,
    FormsModule,
    FormFieldModule,
    NgbPaginationModule,
    DialogModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: AdminHomeComponent
      }
    ])
  ]
})
export class AdminHomeModule { }
