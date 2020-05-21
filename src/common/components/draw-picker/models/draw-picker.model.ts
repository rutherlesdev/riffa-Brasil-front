import { Injector } from '@angular/core';
import { Extender } from '../../../helpers/extender';
import { Account, RaffleEntry } from '../../../sdk';
import { DrawEntryStatus } from './day.model';

export class DrawPickerEntries {
  constructor(
    public max: number,
    public drawEntries: RaffleEntry[] = [],
    public pageNumber = 1,
    public user: Account,
    private _numbers: { column: number, value: number, status?: DrawEntryStatus }[] = [],
  ) {

console.log(Number)
console.log(_numbers)
console.log(_numbers.values)



    if (_numbers.length > 0) {
      return;
    }
    const sliceStart = ((this.pageNumber - 1) * 100) + 1;
    let sliceEnd = ((this.pageNumber - 1) * 100) + 100;
    sliceEnd = sliceEnd > max ? max : sliceEnd;
    for (let i = sliceStart; i <= sliceEnd; i++) {

      this._numbers.push({
        column: i % 10,
        value: i
      });
    }
    if (!user) {

      this._numbers.map((number) => drawEntries.map((entry) => entry.entryNumber).includes(number.value) ? number.status = DrawEntryStatus.NonUserSelected : number.status = DrawEntryStatus.Open);
    } else {
      const userEntries = this.user ? drawEntries.filter((entry) => entry.accountId === this.user.id).map((entry) => entry.entryNumber) : [];
      const nonUserEntries = this.user ? drawEntries.filter((entry) => entry.accountId !== this.user.id).map((entry) => entry.entryNumber) : [];

      this._numbers.map((number) => {
        if (userEntries.includes(number.value)) {
          number.status = DrawEntryStatus.UserSelected;
        } else if (nonUserEntries.includes(number.value)) {
          number.status = DrawEntryStatus.NonUserSelected;
        } else {
          number.status = DrawEntryStatus.Open;
        }
        //  ? number.status = DrawEntryStatus.Completed : number.status = DrawEntryStatus.Open});
      });
    }
  }

  get entries() {
    return [...this._numbers];
  }
}
