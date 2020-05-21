import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Extender } from '../../../../common/helpers/extender';
import { AuthComponent } from '../../../../modules/auth/components/auth/auth.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent extends Extender implements OnInit {

  @ViewChild('main') private main: ElementRef;
  constructor(
    protected injector: Injector
  ) {
    super(injector);

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd
      )).subscribe((event) => {
        this.main.nativeElement.scrollTop = 0;
      });
  }

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.page === 'email-verify') {
        this.dialog.open(AuthComponent, { data: { size: 'md', form: params.page, verifyData: { passcode: params.verify_code, email: params.id } } });
      } else if (params.page === 'signup') {
        this.dialog.open(AuthComponent, { data: { size: 'md', form: params.page, data: { id: params.id, code: params.unicode } } });
        // this.dialog.open(AuthComponent, { data: { size: 'md', form: params.page, verifyData: { passcode: params.verify_code, email: params.id } } });
      } else if (params.page === 'password-reset') {
        this.dialog.open(AuthComponent, { data: { size: 'lg', form: params.page, verifyData: { passcode: params.verify_code, email: params.id } } });
      }
    });
  }

}
