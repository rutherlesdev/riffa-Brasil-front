import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePickerDirective } from './directives/date-picker.directive';

@NgModule({
  declarations: [DatePickerDirective],
  exports: [DatePickerDirective],
  imports: [
    CommonModule
  ]
})
export class DatePickerModule { }
