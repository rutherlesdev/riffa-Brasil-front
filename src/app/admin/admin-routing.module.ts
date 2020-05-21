import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const children: Routes = [
  {
    data: { title: 'Home' },
    path: '',
    loadChildren:
      './../../pages/admin/admin-home/admin-home.module#AdminHomeModule'
  },
  {
    data: { title: 'Products', nav: true },
    path: 'products',
    loadChildren: './../../pages/admin/products/products.module#ProductsModule'
  },
  {
    data: { title: 'Winners', nav: true },
    path: 'raffles',
    loadChildren: './../../pages/admin/raffles/raffles.module#RafflesModule'
  },
  {
    data: { title: 'Content', nav: true },
    path: 'content',
    loadChildren: './../../pages/admin/content/content.module#ContentModule'
  }
  // {
  //   data: { title: 'Profile' },
  //   path: 'profile',
  //   loadChildren: './../../pages/profile/profile.module#ProfileModule'
  // }
];

const routes: Routes = [
  {
    children,
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
