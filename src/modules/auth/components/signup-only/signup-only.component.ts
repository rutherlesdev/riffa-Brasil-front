import { HttpErrorResponse } from '@angular/common/http';
import { Component, Host, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as cloneDeep from 'lodash.clonedeep';
import { Extender } from '../../../../common/helpers/extender';
import { AccountApi, InvitationApi } from '../../../../common/sdk';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-signup-only',
  templateUrl: './signup-only.component.html',
  styleUrls: ['./signup-only.component.scss']
})
export class SignupOnlyComponent extends Extender implements OnInit {
  public model: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rpassword: string;
  } = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    rpassword: null
  };

  public passwordStrength: string;

  /**
   * @property form
   * @type NgForm
   * @private
   */
  @ViewChild('form') private form: NgForm;
  public promo: boolean;

  /**
   * @constructor
   * @param injector {Injector}
   * @param accountApi {AccountApi}
   */
  constructor(
    protected injector: Injector,
    private _invitationApi: InvitationApi,
    private _accountApi: AccountApi,
    @Host() private _authComponent: AuthComponent
  ) {
    super(injector);
  }

  public ngOnInit(): void {
    if (
      this._authComponent.dialogConfig.data &&
      this._authComponent.dialogConfig.data.data
    ) {
      this.promo =
        this._authComponent.dialogConfig.data.data.id &&
        this._authComponent.dialogConfig.data.data.code;
    }
  }

  public get authProps(): AuthComponent {
    return this._authComponent;
  }

  public register(): void {
    if (this.form.valid) {
      this.loading = true;
      const model = cloneDeep(this.model);
      delete model.rpassword;
      this._accountApi.create(model).subscribe(
        (data) => {
          // this.login();
          this.closeModal();
          this.dialog.openAlert({
            data: {
              config: {
                heading: 'Cadastro bem sucedido.',
                body: `Uma mensagem de verificação por email será enviada para ${
                  this.model.email
                }`
              }
            }
          });
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.toastr.error(error.message);
        }
      );
    }
  }

  /**
   * log user in with email and password
   * @method login
   * @public
   * @returns void
   */
  public login(): void {
    if (this.form.valid) {
      this.loading = true;
      this._accountApi.login(this.model).subscribe(
        (data) => {
          this.loading = false;
          this.saveAuthData(data);
          if (this.promo) {
            this._invitationApi
              .claim({
                senderId: this._authComponent.dialogConfig.data.data.id,
                email: this.model.email,
                code: this._authComponent.dialogConfig.data.data.code
              })
              .subscribe();
          }
          this.closeModal();
          this.dialog.openAlert({
            data: {
              config: {
                heading: 'Cadastro bem sucedido.',
                body: `Uma mensagem de verificação por email será enviada para ${
                  this.model.email
                }`
              }
            }
          });
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.toastr.error(error.message);
        }
      );
    }
  }

  public openLogin(): void {
    this._authComponent.form = '';
  }

  public closeModal(): void {
    this._authComponent.dialogRef.close();
  }
}
