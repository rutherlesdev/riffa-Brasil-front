import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { ChartsModule } from 'ng2-charts';
import { WinitCommonModule } from '../../../common/common.module';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';
import { LatestWinnersComponent } from './components/latest-winners/latest-winners.component';

@NgModule({
  declarations: [HomeComponent, LatestWinnersComponent, InfoCardsComponent, HowItWorksComponent, ChartComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    WinitCommonModule,
    MomentModule,
    ChartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
