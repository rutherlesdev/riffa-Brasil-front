import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { WinitCommonModule } from '../../../common/common.module';
import { DatePickerModule } from '../../../modules/date-picker/date-picker.module';
import { DialogModule } from '../../../modules/dialog/dialog.module';
import { FormFieldModule } from '../../../modules/form-field/form-field.module';
import { TableModule } from '../../../modules/table/table.module';
import { AddRaffleComponent } from './components/add-raffle/add-raffle.component';
import { RafflesComponent } from './components/raffles/raffles.component';
import { RaffleService } from './services/raffle.service';

@NgModule({
  declarations: [RafflesComponent, AddRaffleComponent],
  entryComponents: [AddRaffleComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    TableModule,
    DialogModule.forRoot(),
    FormFieldModule,
    DatePickerModule,
    CovalentTextEditorModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RafflesComponent
      }
    ])
  ],
  providers: [
    RaffleService
  ]
})
export class RafflesModule { }
