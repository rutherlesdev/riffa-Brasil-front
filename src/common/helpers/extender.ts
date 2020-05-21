import { Injector, Optional } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from '../../modules/dialog/services/dialog.service';
import { Account, CookieBrowser, LoopBackAuth } from '../sdk';
import { IRoutes, Routes } from './routes';

export class Extender {
  public loading: boolean = false;

  constructor(@Optional() private _injector: Injector) {}

  public get routes(): IRoutes {
    return Routes.ROUTES;
  }

  public get router(): Router {
    return this._injector.get(Router);
  }

  public get activatedRoute(): ActivatedRoute {
    return this._injector.get(ActivatedRoute);
  }

  public gotoPage(page, params: Params = null): Promise<any> {
    if (!params) {
      return this.router.navigate([page]);
    } else {
      return this.router.navigate([page], params);
    }
  }

  public get dialog(): DialogService {
    return this._injector.get(DialogService);
  }
  public get toastr(): ToastrService {
    return this._injector.get(ToastrService);
  }

  public get storageBrowser(): CookieBrowser {
    return this._injector.get(CookieBrowser);
  }

  public get loopbackAuth(): LoopBackAuth {
    return this._injector.get(LoopBackAuth);
  }

  public get loggedIn(): boolean {
    return !!this.loopbackAuth.getCurrentUserId() || false;
  }

  public get currentUser(): Account {
    return this.loopbackAuth.getCurrentUserData()
      ? this.loopbackAuth.getCurrentUserData().user
      : null;
  }

  public get isAdmin(): boolean {
    return !!this.currentUser
      ? this.currentUser.roles.find((role) => role.name === 'admin')
      : false;
  }

  public saveAuthData(data): void {
    this.storageBrowser.set('$LoopBackSDK$id', data.id);
    this.storageBrowser.set('$LoopBackSDK$userId', data.userId);
    this.loopbackAuth.setRememberMe(true);
    this.loopbackAuth.setToken(data);
    this.loopbackAuth.setUser(data);
    this.loopbackAuth.save();
  }

  public getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
