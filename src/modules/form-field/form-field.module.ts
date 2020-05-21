import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ButtonStatusDirective } from './directive/button-status/button-status.directive';
import { InputMaskModule } from './directive/input-mask/input-mask.module';
import { InputRefDirective } from './directive/input-ref/input-ref.directive';
import { ComparePasswordDirective } from './validators/compare-password/compare-password.directive';
import { DateValidatorDirective } from './validators/date/date-validator.directive';
import { PhoneInputValidatorDirective } from './validators/phone-input/phone-input-validator.directive';
import { RestrictCharValidatorDirective } from './validators/restrict-char/restrict-char-validator.directive';
import { SecurePasswordDirective } from './validators/secure-password/secure-password.directive';

@NgModule({
  declarations: [
    FormFieldComponent,
    CheckboxComponent,
    InputRefDirective,
    ComparePasswordDirective,
    SecurePasswordDirective,
    ButtonStatusDirective,
    DateValidatorDirective,
    RestrictCharValidatorDirective,
    PhoneInputValidatorDirective
  ],
  exports: [
    FormFieldComponent,
    CheckboxComponent,
    InputRefDirective,
    ComparePasswordDirective,
    SecurePasswordDirective,
    ButtonStatusDirective,
    DateValidatorDirective,
    RestrictCharValidatorDirective,
    InputMaskModule,
    PhoneInputValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule
  ]
})
export class FormFieldModule { }
