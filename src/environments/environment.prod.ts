import {
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';

export const environment = {
  production: true,
  server: {
    BASE_URL: 'https://rifabackend.herokuapp.com',
    API_VERSION: 'api'
  },
  STRIPE_PUB_KEY: 'pk_live_6HAtJMePHi3XDZRRXWuF8ROD00Dl7WgCfO',
  AUTH_CONFIG: new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        '481790541490-aulbm0n7snhljbgd765nt8nvbsmcaa86.apps.googleusercontent.com'
      )
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('668074910649594')
    }
  ]),
  piwikServer: 'CUSTOM MATOMO ANALYTICS STRING'
};
