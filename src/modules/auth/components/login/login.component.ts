import { Component, Host, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Extender } from '../../../../common/helpers/extender';
import { AccountApi } from '../../../../common/sdk';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends Extender {
  public model: { email: string; password: string } = {
    email: null,
    password: null
  };

  /**
   * @property form
   * @type NgForm
   * @private
   */
  @ViewChild('form') private form: NgForm;

  /**
   * @constructor
   * @param injector {Injector}
   * @param accountApi {AccountApi}
   */
  constructor(
    protected injector: Injector,
    private _accountApi: AccountApi,
    @Host() private _authComponent: AuthComponent
  ) {
    super(injector);
  }

  public get authProps(): AuthComponent {
    return this._authComponent;
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
          this.closeModal();
        },
        (error) => {
          this.loading = false;
          this.toastr.warning(error.message);
        }
      );
    }
  }

  public signup(): void {
    this._authComponent.form = 'signup';
  }

  public forgot(): void {
    this._authComponent.form = 'forgot';
  }

  public closeModal(): void {
    this._authComponent.dialogRef.close();
  }
}
