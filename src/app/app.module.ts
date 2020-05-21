import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';
import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrModule } from 'ngx-toastr';
import { CookieBrowser, SDKBrowserModule } from '../common/sdk';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BaseModule } from './base/base.module';
import { AppComponent } from './components/app/app.component';
import { HoldingPageComponent } from './components/holding-page/holding-page.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { BootstrapService } from './services/bootstrap/bootstrap.service';

export function initialiseApp(bootstrap: BootstrapService) {
  return () =>
    bootstrap
      .initializeApp()
      .then(() => console.log('all services loaded'))
      .catch((err) => console.error(err));
}

export function provideConfig() {
  return environment.AUTH_CONFIG;
}

@NgModule({
  declarations: [AppComponent, HoldingPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BaseModule,
    NgbDropdownModule,
    Angulartics2Module.forRoot(),
    MarkdownModule.forRoot(),
    NgbAlertModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    SDKBrowserModule.forRoot()
  ],
  providers: [
    AdminGuard,
    CookieBrowser,
    BootstrapService,
    {
      deps: [BootstrapService],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: initialiseApp
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
