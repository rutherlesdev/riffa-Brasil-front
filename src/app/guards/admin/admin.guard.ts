import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Extender } from '../../../common/helpers/extender';

@Injectable()
export class AdminGuard extends Extender implements CanActivate {

  constructor(
    protected injector: Injector
  ) {
    super(injector);
  }
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAdmin) {
      return true;
    }
    return false;
  }

}
