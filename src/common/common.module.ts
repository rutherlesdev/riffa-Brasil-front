import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NgbDropdownModule,
  NgbPaginationModule,
  NgbTabsetModule
} from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { Angulartics2Module } from 'angulartics2';
import { DrawPickerComponent } from './components/draw-picker/draw-picker.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SearchComponent } from './components/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { WinnerCardComponent } from './components/winner-card/winner-card.component';
import { ImageLoaderDirective } from './directives/image-loader/image-loader.directive';
import { CustomCurrencyPipe } from './pipes/currency/custom-currency.pipe';
import { FormatPipe } from './pipes/format/format.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
  declarations: [
    SpinnerComponent,
    ImageLoaderDirective,
    ProgressBarComponent,
    ProductCardComponent,
    WinnerCardComponent,
    SearchComponent,
    OrderByPipe,
    FormatPipe,
    FilterComponent,
    DrawPickerComponent,
    CustomCurrencyPipe
  ],
  exports: [
    SpinnerComponent,
    ImageLoaderDirective,
    NgbDropdownModule,
    NgbTabsetModule,
    ProgressBarComponent,
    ProductCardComponent,
    WinnerCardComponent,
    SearchComponent,
    OrderByPipe,
    FormatPipe,
    FilterComponent,
    DrawPickerComponent,
    CustomCurrencyPipe,
    Angulartics2Module
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTabsetModule,
    Angulartics2Module,
    MomentModule
  ],
  providers: [CurrencyPipe, CustomCurrencyPipe]
})
export class WinitCommonModule {}
