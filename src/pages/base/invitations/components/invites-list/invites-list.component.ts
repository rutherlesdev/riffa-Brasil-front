import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import {
  AccountApi,
  FireLoopRef,
  Invitation,
  InvitationApi,
  RealTime
} from '../../../../../common/sdk';
import {
  ITableActions,
  ITableHeader
} from '../../../../../modules/table/models/table';

@Component({
  selector: 'app-invites-list',
  templateUrl: './invites-list.component.html',
  styleUrls: ['./invites-list.component.scss']
})
export class InvitesListComponent extends Extender implements OnInit {
  public invitations: Invitation[] = [];
  public invitationsBK: Invitation[] = [];
  public tableActions: ITableActions[] = [
    {
      color: 'text-danger',
      icon: 'trash-o',
      text: 'Delete',
      event: (data) => {
        this.delete(data);
      }
    }
  ];
  public tableHeaders: ITableHeader[] = [
    {
      text: 'receiverEmail',
      formatted_text: 'Recipient',
      type: 'text'
    },
    {
      text: 'senderClaimed',
      formatted_text: 'Sender Claimed',
      type: 'badge.primary'
    },
    {
      text: 'receiverClaimed',
      formatted_text: 'Reciever Claimed',
      type: 'badge.primary'
    },
    {
      text: 'createdAt',
      formatted_text: 'Created At',
      type: 'date'
    },
    {
      text: 'updatedAt',
      formatted_text: 'Updated At',
      type: 'date'
    }
  ];
  public pageSize: number = 10;
  public invitationRef: FireLoopRef<Invitation>;

  constructor(
    protected injector: Injector,
    private _rt: RealTime,
    private _accountApi: AccountApi,
    private _invitationApi: InvitationApi
  ) {
    super(injector);
    this._rt.onReady().subscribe(() => {});
  }
  public ngOnInit() {
    this.invitationRef = this._rt.FireLoop.ref<Invitation>(Invitation);
    this._getInvitations();
  }

  public onPageChange(page): void {
    const start = (page - 1) * this.pageSize;
    this.invitations = this.invitationsBK.slice(start, start + this.pageSize);
  }

  private delete(item): void {
    this.dialog
      .openAlert({
        data: {
          config: {
            heading: 'Delete Invitation',
            body: 'Are you sure you want to delete this invitation?'
          },
          buttons: {
            buttons: [
              { text: 'Delete', color: 'danger', eventname: 'delete' },
              { text: 'Close', color: 'outline-danger', eventname: 'close' }
            ]
          }
        }
      })
      .afterClosed.subscribe((event) => {
        if (event === 'delete') {
          this.invitationRef.remove(item).subscribe();
        }
      });
  }

  private _getInvitations(): void {
    this.loading = true;
    this.invitationRef
      .on('change', {
        where: { isDeleted: false, accountId: this.currentUser.id },
        include: {
          relation: 'account'
        }
      })
      .subscribe((data: Invitation[]) => {
        this.invitations = this.invitationsBK = data;
        this.loading = false;
      });
  }
}
