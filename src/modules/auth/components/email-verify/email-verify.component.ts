import { HttpErrorResponse } from '@angular/common/http';
import { Component, Host, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../common/helpers/extender';
import { AccountApi } from '../../../../common/sdk';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent extends Extender implements OnInit {

  public msg: string;

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

  public ngOnInit() {

    this._accountApi.verifyEmail(this._authComponent.dialogConfig.data.verifyData)
      .subscribe(() => {
        this.msg = `Your email, ${this._authComponent.dialogConfig.data.verifyData.email} has been verified successfully`;
      },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.msg = `Something went wrong. Please contact admin. <br/> ${error.message}`;
          this.toastr.error(error.message);
        });
  }
}
