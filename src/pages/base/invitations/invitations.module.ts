import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { WinitCommonModule } from '../../../common/common.module';
import { FormFieldModule } from '../../../modules/form-field/form-field.module';
import { TableModule } from '../../../modules/table/table.module';
import { InvitationsComponent } from './components/invitations/invitations.component';
import { SendInvitesComponent } from './components/send-invites/send-invites.component';
import { InvitesListComponent } from './components/invites-list/invites-list.component';

@NgModule({
  declarations: [InvitationsComponent, SendInvitesComponent, InvitesListComponent],
  imports: [
    CommonModule,
    WinitCommonModule,
    MomentModule,
    FormFieldModule,
    FormsModule,
    TableModule,
    NgbPaginationModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvitationsComponent
      }
    ])
  ]
})
export class InvitationsModule { }
