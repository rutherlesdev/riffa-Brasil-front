import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { WinitCommonModule } from '../../../common/common.module';
import { DialogModule } from '../../../modules/dialog/dialog.module';
import { FormFieldModule } from '../../../modules/form-field/form-field.module';
import { TableModule } from '../../../modules/table/table.module';
import { ContentItemComponent } from './components/content-item/content-item.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [ContentComponent, ContentItemComponent],
  entryComponents: [ContentItemComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    FormFieldModule,
    FormsModule,
    TableModule,
    NgbPaginationModule,
    DialogModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ContentComponent
      }
    ])
  ]
})
export class ContentModule { }
