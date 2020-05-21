import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { WinitCommonModule } from '../../../common/common.module';
import { DialogModule } from '../../../modules/dialog/dialog.module';
import { FormFieldModule } from '../../../modules/form-field/form-field.module';
import { TableModule } from '../../../modules/table/table.module';
import { CurrentWagersComponent } from './components/current-wagers/current-wagers.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WagerHistoryComponent } from './components/wager-history/wager-history.component';

@NgModule({
  declarations: [ProfileComponent, ProfileCardComponent, WagerHistoryComponent, CurrentWagersComponent, EditProfileComponent],
  entryComponents: [EditProfileComponent],
  exports: [EditProfileComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    TableModule,
    NgbPaginationModule,
    FormsModule,
    FormFieldModule,
    DialogModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent
      }
    ])
  ]
})
export class ProfileModule { }
