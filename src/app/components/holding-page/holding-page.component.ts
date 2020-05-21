import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../common/helpers/extender';
import { AuthComponent } from '../../../modules/auth/components/auth/auth.component';

@Component({
  selector: 'app-holding-page',
  templateUrl: './holding-page.component.html',
  styleUrls: ['./holding-page.component.scss']
})
export class HoldingPageComponent extends Extender implements OnInit {
  constructor(protected injector: Injector) {
    super(injector);
  }

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.page === 'email-verify') {
        this.dialog.open(AuthComponent, {
          data: {
            size: 'md',
            form: params.page,
            verifyData: { passcode: params.verify_code, email: params.id }
          }
        });
      } else if (params.page === 'password-reset') {
        this.dialog.open(AuthComponent, {
          data: {
            size: 'lg',
            form: params.page,
            verifyData: { passcode: params.verify_code, email: params.id }
          }
        });
      }
    });
  }

  public openAuth(form: string): void {
    this.dialog.open(AuthComponent, { data: { size: 'md', form } });
  }
}
