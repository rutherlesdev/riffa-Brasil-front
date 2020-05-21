import { Component, Host, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Extender } from '../../../../common/helpers/extender';
import { AccountApi } from '../../../../common/sdk';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetPasswordComponent extends Extender implements OnInit {

  /**
   * @property form
   * @type  { email: string, password: string, rpassword: string, passcode: string }
   * @public
   * @default { email: null, password: null, rpassword: null, passcode: null }
   */
  public model: { email: string, password: string, rpassword: string, passcode: string } = { email: null, password: null, rpassword: null, passcode: null };

  /**
   * @property passwordStrength
   * @type string
   * @public
   */
  public passwordStrength: string;

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
    private accountApi: AccountApi,
    @Host() private _authComponent: AuthComponent
  ) {
    super(injector);
  }

  public ngOnInit(): void {
    this.model.email = this._authComponent.dialogConfig.data.verifyData.email;
    this.model.passcode = this._authComponent.dialogConfig.data.verifyData.passcode;
  }

  /**
   * @description resets users password
   * @property passwordConfirm
   * @public
   * @returns void
   */
  public passwordConfirm(): void {
    if (this.form.valid) {
      if (this.model.passcode) {
        this.loading = true;
        this.accountApi.resetAccountPassword(this.model).subscribe(
          (data) => {
            this.loading = false;
            this.openLogin();
          },
          (error) => {
            this.loading = false;
            this.toastr.error(error);
          });
      } else {
        this.toastr.error('no valid pin supplied');
      }
    } else {
      this.toastr.error('something is missing');
    }
  }

  public openLogin(): void {
    this._authComponent.form = '';
  }

  public closeModal(): void {
    this._authComponent.dialogRef.close();
  }

}
