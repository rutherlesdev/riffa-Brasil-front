import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { WinitCommonModule } from '../../../common/common.module';
import { DialogModule } from '../../../modules/dialog/dialog.module';
import { FormFieldModule } from '../../../modules/form-field/form-field.module';
import { TableModule } from '../../../modules/table/table.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [ProductsComponent, AddProductComponent],
  entryComponents: [AddProductComponent],
  exports: [AddProductComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    FormFieldModule,
    FormsModule,
    TableModule,
    CovalentTextEditorModule,
    NgbPaginationModule,
    DialogModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ])
  ]
})
export class ProductsModule { }
