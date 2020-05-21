import { Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Extender } from '../../helpers/extender';
import { RaffleEntry } from '../../sdk';
import { DrawPickerEntries } from './models/draw-picker.model';

@Component({
  selector: 'app-draw-picker',
  templateUrl: './draw-picker.component.html',
  styleUrls: ['./draw-picker.component.scss']
})
export class DrawPickerComponent extends Extender implements OnInit, OnChanges {

  @Input() public max: number = null;
  @Input() public entries: RaffleEntry[] = [];
  @Input() public maxSelection: number = 0;
  @Output() public emitEntries: EventEmitter<number[]> = new EventEmitter<number[]>();
  public currentDraw: DrawPickerEntries = null;
  @Input() public userSelection: number[] = [];
  public currentPage: number = 1;

  constructor(
    protected injector: Injector
  ) {
    super(injector);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.currentDraw = new DrawPickerEntries(this.max, this.entries, 1, this.currentUser);
    this.onPageChange(this.currentPage);
  }

  public ngOnInit() {
    this.currentDraw = new DrawPickerEntries(this.max, this.entries, 1, this.currentUser);
    this.userSelection = this.currentUser ? this.entries.filter((entry) => entry.accountId === this.currentUser.id).map((entry) => entry.entryNumber) : [];
    // this.emitEntries.next(this.userSelection);
  }

  public getRow(index: number) {
    const startRow = 1;
    const weekRow = Math.floor(index / 10);
    return startRow + weekRow;
  }

  public selectNumber(number): void {
    const index = this.userSelection.findIndex((num) => num === number);
    if (index !== -1) {
      this.userSelection.splice(index, 1);
    } else {
      this.userSelection.length < this.maxSelection ? this.userSelection.push(number) : this.toastr.warning('Você não pode selecionar mais números');
    }
    this.emitEntries.next(this.userSelection); // .filter((obj) => this.entries.map((entry) => entry.entryNumber).indexOf(obj) === -1));
  }

  public getSelectedNumbers(number) {
    return this.userSelection.findIndex((num) => num === number) !== -1;
  }

  public onPageChange(page: number): void {
    this.currentPage = page;
    this.currentDraw = new DrawPickerEntries(this.max, this.entries, page, this.currentUser);
  }

}
