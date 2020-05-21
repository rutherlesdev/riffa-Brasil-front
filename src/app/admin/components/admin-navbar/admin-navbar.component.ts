import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../common/helpers/extender';
import { AccountApi } from '../../../../common/sdk';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent extends Extender implements OnInit {

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

  public openProfile(): void {
    this.gotoPage(this.routes.profile);
  }

  public logout(): void {
    this._accountApi.logout()
      .subscribe(() => {
        this.loopbackAuth.clear();
        this.gotoPage(this.routes.home);
      });
  }

  private _getNavItems(): void {
    this.navItems = [
      {
        url: this.routes.admin,
        data: { title: 'Home' }
      },
      {
        url: this.routes.adminProducts,
        data: { title: 'Products' }
      },
      {
        url: this.routes.adminRaffles,
        data: { title: 'Raffles' }
      },
      {
        url: this.routes.adminContent,
        data: { title: 'Content' }
      }
    ];
  }

}
