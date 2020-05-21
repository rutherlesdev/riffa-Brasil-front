import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputMaskDirective } from './input-mask.directive';

@NgModule({
  declarations: [InputMaskDirective],
  exports: [InputMaskDirective],
  imports: [
    CommonModule
  ]
})
export class InputMaskModule { }
