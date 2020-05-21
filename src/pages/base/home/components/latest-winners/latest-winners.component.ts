import { Component, OnInit } from '@angular/core';
import {
  RaffleDraw,
  RaffleEntry,
  RaffleEntryApi
} from '../../../../../common/sdk';

@Component({
  selector: 'app-latest-winners',
  templateUrl: './latest-winners.component.html',
  styleUrls: ['./latest-winners.component.scss']
})
export class LatestWinnersComponent implements OnInit {
  public winners: RaffleEntry[] = [];

  constructor(private _raffleEntryApi: RaffleEntryApi) {}

  public ngOnInit() {
    this.getRaffleEntries();
  }
  // When you apply filters to related models, the query returns results from the first model plus any results from related models with the filter query, similar to a “left join” in SQL.
  public getRaffleEntries(): void {
    this._raffleEntryApi
      .find({
        fields: ['accountId', 'raffleDrawId'],
        where: { isWinningEntry: true, isDeleted: false },
        include: [
          {
            relation: 'raffleDraw',
            scope: {
              fields: ['id', 'productId', 'price'],
              include: {
                relation: 'product',
                scope: { fields: ['images'] }
              }
            }
          },
          {
            relation: 'account',
            scope: {
              fields: ['id'],
              include: {
                relation: 'contact',
                scope: { fields: ['firstName', 'lastName', 'town', 'picture'] }
              }
            }
          }
        ]
        // }: 'product' }, { 'account': 'contact' }],
      })
      .subscribe((res: RaffleEntry[]) => {
        this.winners = res;
        console.log(res);
      });
  }
}
