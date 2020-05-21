import { AfterContentChecked, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentChecked {

  @Input() public viewModel: any;
  @Input() public data: any;
  @Input() public config: any;
  @Input() public headers: any = [];
  @Input() public actions: any = [];
  @Output() public actionClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public selectedData: EventEmitter<any> = new EventEmitter<any>();

  public tableData: any = [];
  public allData: any = [];
  public sort: any = { column: 'Name', descending: true };
  public currentPage = 1;
  public sliceStart = 0;
  public sliceEnd: number;
  public totalItems = 0;

  constructor() { }

  public defaults() {
    return {
      showSelect: false,
      itemsPerPage: 10
    };
  }

  public ngAfterContentChecked() {
    this.config = Object.assign(this.defaults(), this.config);
    if (this.data) {
      // this.data.subscribe((data) => {
      this.getTableHeadings(this.data);
      this.allData = this.tableData = this.data;
      this.setPageNumbers();
      // });
    }
  }

  public getTableHeadings(data) {
    let tableHeaders = [];
    if (!this.headers || this.headers.length === 0) {
      tableHeaders = data && data[0] ? [...Object.keys(data[0])] : [];
      tableHeaders.forEach((element) => {
        this.headers.push({
          text: element,
          checked: true,
          formatted_text: element,
          type: 'text',
          checkbox: false
        });
      });
    }
    if (this.config.selectable && !this.config.tableHeaders[0].checkbox) {
      this.config.tableHeaders.splice(0, 0, {
        text: 'Selectable',
        checked: true,
        formatted_text: 'Selectable',
        type: 'checkbox',
        checkbox: true
      });
    }
  }

  public setPageNumbers() {
    this.totalItems = this.tableData.length;
    this.sliceStart = (this.currentPage - 1) * Number(this.config.itemsPerPage);
    this.sliceEnd = this.sliceStart + Number(this.config.itemsPerPage);
  }

  public selectedClass(column): string {
    let styles = '';
    styles = 'sorting capitalize ';
    if (column.type === 'image') {
      styles = 'img-header capitalize';
    }
    if (column.checkbox) {
      styles = 'sorting_disabled checkbox-header';
    }
    if (column.text === this.sort.column && this.sort.descending === false && !column.checkbox) {
      return 'sorting_asc ' + styles;
    } else if (column.text === this.sort.column && this.sort.descending === true && !column.checkbox) {
      return 'sorting_desc ' + styles;
    } else {
      return styles;
    }
  }

  public changeSorting(column): void {
    const sort = this.sort;
    if (sort.column === column.text) {
      sort.descending = !sort.descending;
    } else {
      sort.column = column.text;
      sort.descending = false;
    }
  }

  public convertSorting(): string {
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  public onSearch({ column, search }) {
    this.currentPage = 1;
    let comparator = '';
    search = search ? search.toString() : undefined;
    if (search && search.trim() !== '') {
      if (!column) {
        console.log('Select a column to search');
      } else {
        this.tableData = this.allData.filter((d) => {
          comparator = this.byString(d, column.text);
          if (column.type === 'date' || column.type === 'datetime') {
            return comparator ? new Date(comparator).toDateString().indexOf(new Date(search).toDateString()) > -1 : null;
          } else {
            return comparator ? comparator.toLowerCase().indexOf(search.toLowerCase()) > -1 : null;
          }
        });
      }
    } else {
      this.tableData = this.allData;
    }
    this.setPageNumbers();
  }

  public onPageChanged(event: any): void {
    this.currentPage = event.currentPage;
    this.sliceStart = event.startIndex;
    this.sliceEnd = event.endIndex + 1;
  }

  public selectAll(e) {
    this.tableData.map((item) => {
      item.check = e.target.checked;
      return item;
    });
    this.getSelectedItems();
  }

  public selectItem(e, item) {
    item.check = e.target.checked;
    this.getSelectedItems();
  }

  public getSelectedItems() {
    this.selectedData.emit(this.tableData.filter((item) => item.check = true));
  }

  public onEvent(data, index, action) {
    this.actionClick.emit({ data, index, action: action.event_name });
  }

  public byString(o, s): string {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i];
      if (o && k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }
}
