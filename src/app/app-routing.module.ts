import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HoldingPageComponent } from './components/holding-page/holding-page.component';
import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
/*    {
     path: '',
     component: HoldingPageComponent
   }, */
  {
    path: '',
    loadChildren: './base/base.module#BaseModule'
  },
  {
    canActivate: [AdminGuard],
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
