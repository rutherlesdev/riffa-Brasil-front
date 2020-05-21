import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent extends Extender implements OnInit {

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  public ngOnInit() {
  }

}
