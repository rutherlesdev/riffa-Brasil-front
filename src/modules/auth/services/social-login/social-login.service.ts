import { Injectable } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LoginOpt } from 'angularx-social-login';

@Injectable()
export class SocialLoginService {

  private fbLoginOptions: LoginOpt = {
    scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
    return_scopes: true,
    enable_profile_selector: true
  };

  private googleLoginOptions: LoginOpt = {
    scope: 'profile email'
  };

  constructor(
    private _authService: AuthService
  ) { }

  /**
   * ["public_profile"] is the array of permissions, you can add more if you need
   * Getting user properties such as name and gender etc
   * @method fbLogin
   * @return Promise<any>
   * this.fb.login(['public_profile']).then(() => {
   * this.fb.api('/me?fields=id,name,first_name,last_name,gender,email,picture{url}', [])
   */
  public fbLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._authService.signIn(FacebookLoginProvider.PROVIDER_ID, this.fbLoginOptions)
        .then((user) => {
          user.facebook = true;
          resolve(user);
        }, (err) => {
          reject(err);
        });
    });
  }

  /**
   * optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
   * optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
   * @method googleLogin
   * @return Promise<any>
   */
  public googleLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._authService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions)
        .then((user: any) => {
          user.google = true;
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
