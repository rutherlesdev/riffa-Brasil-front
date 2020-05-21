import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WinitCommonModule } from '../../common/common.module';
import { AuthModule } from '../../modules/auth/auth.module';
import { DialogModule } from '../../modules/dialog/dialog.module';
import { BaseRoutingModule } from './base-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { BaseComponent } from './components/base/base.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [BaseComponent, NavbarComponent, FooterComponent, BannerComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    DialogModule.forRoot(),
    AuthModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
