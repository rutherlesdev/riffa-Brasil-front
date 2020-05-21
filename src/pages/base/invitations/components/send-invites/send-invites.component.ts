import {
  Component,
  ElementRef,
  Injector,
  OnInit,
  ViewChild
} from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Extender } from '../../../../../common/helpers/extender';
import {
  Account,
  AccountApi,
  Invitation,
  InvitationApi
} from '../../../../../common/sdk';

@Component({
  selector: 'app-send-invites',
  templateUrl: './send-invites.component.html',
  styleUrls: ['./send-invites.component.scss']
})
export class SendInvitesComponent extends Extender implements OnInit {
  public email: string;
  public emails: string[] = [];
  public invite: Invitation = new Invitation();
  @ViewChild('linkRef') private linkRef: ElementRef;

  constructor(
    protected injector: Injector,
    private _accountApi: AccountApi,
    private _invitationApi: InvitationApi
  ) {
    super(injector);
  }

  public ngOnInit() {
    if (this.currentUser) {
      this.invite = new Invitation({
        accountId: this.currentUser.id,
        link: this.currentUser.invitivationCode
          ? `${window.location.href}/?page=signup&id=${
          this.currentUser.id
          }&unicode=${this.currentUser.invitivationCode}`
          : null,
        code: this.currentUser.invitivationCode
      });
    }
  }

  public removeEmail(email: string): void {
    const index = this.emails.findIndex((_email) => _email === email);
    this.emails.splice(index, 1);
  }

  public copy(): void {
    const copyText: HTMLInputElement = this.linkRef
      .nativeElement as HTMLInputElement;
    copyText.select();
    document.execCommand('copy');
  }

  public getInviteLink(): void {
    this._accountApi
      .setInvitationCode({ id: this.currentUser.id })
      .subscribe((data: Account) => {
        this.currentUser.invitivationCode = data.invitivationCode;
        this.invite.link = `${window.location.origin}/?page=signup&id=${
          this.currentUser.id
          }&unicode=${this.currentUser.invitivationCode}`;
        this.invite.code = this.currentUser.invitivationCode;
        this.toastr.success('Invitation code has been set');
      });
  }

  public addInvitation(): void {
    this.emails.forEach((email) => {
      this.invite.receiverEmail = email;
      this._invitationApi.create(this.invite).subscribe();
    });

    this.send(this.emails);
  }

  private send(emails): void {
    this.loading = true;
    const emailData = {
      subject: `${this.currentUser.contact.firstName +
        ' ' +
        this.currentUser.contact.lastName} sent you an invitation!`,
      content: `
      
      `
    };
    this._accountApi.sendEmail({ emails, emailData }).subscribe(() => {
      this.loading = false;
      this.toastr.success('Emails have been sent');
    });
  }
}
