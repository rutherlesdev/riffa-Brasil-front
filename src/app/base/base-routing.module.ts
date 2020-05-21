import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';

const children: Routes = [
  {
    data: { title: 'Inicio' },
    path: '',
    loadChildren: './../../pages/base/home/home.module#HomeModule'
  },
  {
    data: { title: 'Riffas', nav: true },
    path: 'live',
    loadChildren: './../../pages/base/live/live.module#LiveModule'
  },
  {
    data: { title: 'Ganhadores', nav: true },
    path: 'winner',
    loadChildren: './../../pages/base/winners/winners.module#WinnersModule'
  },
  {
    data: { title: 'Próximos', nav: true },
    path: 'upcoming',
    loadChildren: './../../pages/base/upcoming/upcoming.module#UpcomingModule'
  },
  {
    data: { title: 'Perfil' },
    path: 'profile',
    loadChildren: './../../pages/base/profile/profile.module#ProfileModule'
  },
  {
    data: { title: 'Convites' },
    path: 'invitations',
    loadChildren:
      './../../pages/base/invitations/invitations.module#InvitationsModule'
  }
];

const routes: Routes = [
  {
    children,
    path: '',
    component: BaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
