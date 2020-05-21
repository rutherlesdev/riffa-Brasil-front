import { Component, Injector, OnInit } from '@angular/core';
import * as cloneDeep from 'lodash.clonedeep';
import { Extender } from '../../../../../common/helpers/extender';
import { Contact } from '../../../../../common/sdk';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent extends Extender implements OnInit {

  constructor(
    protected injector: Injector
  ) {
    super(injector);
  }

  public get contact(): Contact {
    return this.currentUser.contact;
  }

  public ngOnInit() {
    console.log(this.currentUser);
  }

  public openEdit(): void {
    this.dialog.open(EditProfileComponent, { data: cloneDeep(this.contact) });
  }

}
