import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WinitCommonModule } from '../../common/common.module';
import { AuthModule } from '../../modules/auth/auth.module';
import { DialogModule } from '../../modules/dialog/dialog.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [AdminComponent, AdminNavbarComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    DialogModule.forRoot(),
    AuthModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
