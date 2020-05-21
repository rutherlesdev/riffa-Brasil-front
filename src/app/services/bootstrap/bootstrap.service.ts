import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/operators';
import { Extender } from '../../../common/helpers/extender';
import { AccountApi, CookieBrowser, LoopBackConfig } from '../../../common/sdk';
import { environment } from '../../../environments/environment';

@Injectable()
export class BootstrapService extends Extender {

  constructor(
    protected injector: Injector,
    private _accountApi: AccountApi,
    private _storageBrowser: CookieBrowser
  ) {
    super(injector);
  }

  public initializeApp() {
    return new Promise((resolve, reject) => {
      this._loopbackSetup();
      this.autoLogin();
      resolve();
    });
  }

  public autoLogin() {

    const id = this._storageBrowser.get('$LoopBackSDK$userId');
    if (id) {
      this._getAccountById(id).subscribe((user: any) => {
        const data = { user: user };
        this.loopbackAuth.setUser(data);
        console.log(data);
        this.loopbackAuth.save();
        // resolve();
      }, () => {
        this._accountApi.logout();
        // reject();
      });
    }
  }

  private _getAccountById(id: string): Observable<any> {
    return this._accountApi.findById(id,
      {
        // filter would go here and would look something like 
        // fields: ['id', 'town', 'firstName', 'lastName', 'updatedById'],
        include: [
          {
            relation: 'contact',
            scope: {
              where: { isDeleted: false },
              include: [{
                relation: 'preference',
                scope: {
                  where: { isDeleted: false },
                }
              },
              {
                relation: 'raffleDraws',
                scope: {
                  where: { isDeleted: false },
                  include: ['product']
                }
              }]
            }
          },
          {
            relation: 'roles'
          }
        ]
      }) ;
  }

  private _loopbackSetup(): void {
    LoopBackConfig.setBaseURL(environment.server.BASE_URL);
    LoopBackConfig.setApiVersion(environment.server.API_VERSION);
  }
}
