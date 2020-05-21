import { Injectable } from '@angular/core';
import { RaffleDraw, FireLoopRef } from '../../../../common/sdk';

@Injectable()
export class RaffleService {

  private _raffleRef: FireLoopRef<RaffleDraw>;
  public get raffleRef(): FireLoopRef<RaffleDraw> {
    return this._raffleRef;
  }
  public set raffleRef(data) {
    this._raffleRef = data;
  }

  constructor() { }
}
