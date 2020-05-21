import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../common/helpers/extender';
import { AccountApi } from '../../../../common/sdk';
import { AuthComponent } from '../../../../modules/auth/components/auth/auth.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends Extender implements OnInit {

  public navItems: any[] = [];

  constructor(
    protected injector: Injector,
    private _accountApi: AccountApi
  ) {
    super(injector);
  }

  public ngOnInit() {
    this._getNavItems();
  }

  public openAuth(form: string): void {
    this.dialog.open(AuthComponent, { data: { size: 'md', form } });
  }

  public openProfile(): void {
    this.gotoPage(this.routes.profile);
  }

  public openInvitations(): void {
    this.gotoPage(this.routes.invitations);
  }

  public logout(): void {
    this._accountApi.logout()
      .subscribe(() => {
        this.loopbackAuth.clear();
        this.gotoPage(this.routes.home);
      });
  }

  private _getNavItems(): void {
    for (const routeConfig of this.router.config) {
      if (routeConfig.children) {
        for (const routeChildrenConfig of routeConfig.children) {
          if (routeChildrenConfig.data && routeChildrenConfig.data.nav) {
            this.navItems.push({
              url: `/${routeChildrenConfig.path}`,
              data: routeChildrenConfig.data
            });
          }
        }
      }
    }
  }

}
