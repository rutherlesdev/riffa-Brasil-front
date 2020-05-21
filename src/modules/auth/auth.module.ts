import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WinitCommonModule } from '../../common/common.module';
import { FormFieldModule } from '../form-field/form-field.module';
import { AuthComponent } from './components/auth/auth.component';
import { EmailVerifyComponent } from './components/email-verify/email-verify.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LoginAdminComponent } from './components/logi-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset/reset.component';
import { SignupOnlyComponent } from './components/signup-only/signup-only.component';
import { SignupComponent } from './components/signup/signup.component';
import { SocialLoginService } from './services/social-login/social-login.service';

@NgModule({
  declarations: [
    LoginComponent,
    LoginAdminComponent,
    SignupComponent,
    ForgotComponent,
    ResetPasswordComponent,
    ProfileComponent,
    AuthComponent,
    SignupOnlyComponent,
    EmailVerifyComponent
  ],
  entryComponents: [
    LoginComponent,
    LoginAdminComponent,
    SignupComponent,
    ForgotComponent,
    ResetPasswordComponent,
    ProfileComponent,
    AuthComponent,
    SignupOnlyComponent
  ],
  imports: [CommonModule, FormsModule, FormFieldModule, WinitCommonModule],
  providers: [SocialLoginService]
})
export class AuthModule {}
