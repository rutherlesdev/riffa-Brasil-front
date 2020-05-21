import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() public property: any = {};
  @Output() public event: EventEmitter<any> = new EventEmitter<any>();
  public keys: string[];
  public sort: { text: string, value: string }[] = [{ text: 'ASC', value: '+' }, { text: 'DESC', value: '-' }];
  public key: string = null;
  public sortItem: { text: string, value: string } = null;

  constructor() { }

  public ngOnInit() {
    this.keys = Object.keys(this.property);
  }

  public submit(key: string, sortItem: string) {
    this.event.next({ key, sortItem });
  }

}
