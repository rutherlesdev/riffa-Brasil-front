import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../common/helpers/extender';
import { AccountApi, InvitationApi } from '../../../../common/sdk';
import { DialogConfig } from '../../../dialog/helpers/dialog-config';
import { DialogRef } from '../../../dialog/helpers/dialog-ref';
import { SocialLoginService } from '../../services/social-login/social-login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent extends Extender implements OnInit {

  public form: string = this._dialogConfig.data.form || '';
  public size: string = 'md';
  public fbLoading: boolean;
  public googleLoading: boolean;

  public get dialogConfig(): DialogConfig {
    return this._dialogConfig;
  }

  public get dialogRef(): DialogRef {
    return this._dialogRef;
  }

  constructor(
    protected injector: Injector,
    private _dialogRef: DialogRef,
    private _dialogConfig: DialogConfig,
    private _accountApi: AccountApi,
    private _invitationApi: InvitationApi,
    private _socialLoginService: SocialLoginService,
  ) {
    super(injector);
  }

  get promo(): boolean {
    if (this.dialogConfig.data && this.dialogConfig.data.data) {
      return this.dialogConfig.data.data.id && this.dialogConfig.data.data.code;
    }
  }

  public ngOnInit() {
  }

  /**
   * users devices  native facebook app to login
   * @method fbLogin
   * @return void
   */
  public fbLogin(): void {
    this.fbLoading = true;
    this._socialLoginService.fbLogin()
      .then((user: any) => {

        this._accountApi.socialLogin(user)
          .subscribe(() => this._accountApi.login({ email: user.email, password: user.id })
            .subscribe((userData) => {
              this.fbLoading = false;
              if (this.promo) {
                this._invitationApi.claim({ senderId: this.dialogConfig.data.data.id, email: user.email, code: this.dialogConfig.data.data.code }).subscribe();
              }
              this.saveAuthData(userData);
              this.closeModal();
            }),

            (err: HttpErrorResponse) => {
              this.fbLoading = false;
              this.toastr.error(err.message);
            });
      }, (err) => {
        console.log('Facebook Login error', err);
      });
  }

  /**
   * users devices  native google app to login
   * @method googleLogin
   * @return void
   */
  public googleLogin() {
    this.googleLoading = true;
    this._socialLoginService.googleLogin()
      .then((user: any) => {

        this._accountApi.socialLogin(user)
          .subscribe(() => this._accountApi.login({ email: user.email, password: user.id })
            .subscribe((userData) => {
              this.googleLoading = false;
              if (this.promo) {
                this._invitationApi.claim({ senderId: this.dialogConfig.data.data.id, email: user.email, code: this.dialogConfig.data.data.code }).subscribe();
              }
              this.saveAuthData(userData);
              this.closeModal();
            }),

            (err: HttpErrorResponse) => {
              this.googleLoading = false;
              this.toastr.error(err.message);
            });
      }, (err: HttpErrorResponse) => {
        console.log('Google Login error', err);
      });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

}
