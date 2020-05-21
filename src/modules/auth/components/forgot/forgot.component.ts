import { Component, Host, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Extender } from '../../../../common/helpers/extender';
import { AccountApi } from '../../../../common/sdk';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent extends Extender {

  /**
   * @property form
   * @type  { email: string }
   * @public
   * @default { email: null }
   */
  public model: { email: string } = { email: null };

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

  /**
   * @description resets users password
   * @property passwordConfirm
   * @public
   * @returns void
   */
  public requestReset(): void {
    if (this.form.valid) {
      this.loading = true;
      this.accountApi.resetPasswordRequest(this.model).subscribe(
        (data) => {
          this.loading = false;
          this.closeModal();
        },
        (error) => {
          this.loading = false;
          this.toastr.error(error.message);
        });
    } else {
      this.toastr.error('no valid pin supplied');
    }
  }

  public openLogin(): void {
    this._authComponent.form = '';
  }

  public closeModal(): void {
    this._authComponent.dialogRef.close();
  }

}
