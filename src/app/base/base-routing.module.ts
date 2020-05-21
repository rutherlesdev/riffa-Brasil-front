import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';

const children: Routes = [
  {
    data: { title: 'Home' },
    path: '',
    loadChildren: './../../pages/base/home/home.module#HomeModule'
  },
  {
    data: { title: 'Live', nav: true },
    path: 'live',
    loadChildren: './../../pages/base/live/live.module#LiveModule'
  },
  {
    data: { title: 'Winners', nav: true },
    path: 'winner',
    loadChildren: './../../pages/base/winners/winners.module#WinnersModule'
  },
  {
    data: { title: 'Upcoming', nav: true },
    path: 'upcoming',
    loadChildren: './../../pages/base/upcoming/upcoming.module#UpcomingModule'
  },
  {
    data: { title: 'Profile' },
    path: 'profile',
    loadChildren: './../../pages/base/profile/profile.module#ProfileModule'
  },
  {
    data: { title: 'Invitations' },
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
