import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends Extender implements OnInit {
  constructor(protected injector: Injector) {
    super(injector);
  }

  public ngOnInit() {}
}
