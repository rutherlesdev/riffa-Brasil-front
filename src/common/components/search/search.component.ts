import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public search: Subject<string> = new Subject<string>();
  @Input() public placeholder: string;
  @Output() public event: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  /**
   * @description subscribe to search events
   * @method ngOnInit
   * @public
   * @returns void
   */
  public ngOnInit() {
    this._searchSubscription();
  }

  /**
   * @description clear search input and send empty string
   * @method clearSearch
   * @param input { value: string; }
   * @public
   * @returns void
   */
  public clearSearch(input: { value: string; }): void {
    this.search.next('');
    input.value = '';
  }

  /**
   * @description subscribe to search input chnages
   * @method _searchSubscription
   * @public
   * @returns void
   */
  private _searchSubscription(): void {
    this.search.pipe(
      map((value) => value),
      debounceTime(600),
      distinctUntilChanged()
    ).subscribe((searchPhrase) => {

      this.event.next(searchPhrase);

    });
  }
}
