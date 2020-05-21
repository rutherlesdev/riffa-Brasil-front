import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Extender } from '../../../../common/helpers/extender';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends Extender {

  @ViewChild('adminMain') private main: ElementRef;
  constructor(
    protected injector: Injector
  ) {
    super(injector);

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd
      )).subscribe((event) => {
        this.main.nativeElement.scrollTop = 0;
      });
  }
}
