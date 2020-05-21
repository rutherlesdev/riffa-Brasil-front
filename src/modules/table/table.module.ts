import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WinitCommonModule } from '../../common/common.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    WinitCommonModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
