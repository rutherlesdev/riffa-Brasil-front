import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dialogInsertion]'
})
export class DialogInsertionDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
