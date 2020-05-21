import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map, switchMap } from 'rxjs/operators';
import { counties } from '../../../assets/data/uk-county';
import { Extender } from '../../helpers/extender';
import { ContentApi, RaffleDraw, RaffleDrawApi } from '../../sdk';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends Extender {
  public useWinnersDummyData: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  public oldRaffles: RaffleDraw[];

  constructor(
    protected injector: Injector,
    private http: HttpClient,
    private raffleApi: RaffleDrawApi,
    contentApi: ContentApi
  ) {
    super(injector);
    contentApi
      .find({ where: { type: 'useWinnersDummyData' } })
      .subscribe((item) =>
        this.useWinnersDummyData.next(item.length > 0 ? item[0] : null)
      );
  }

  public getWinners() {
    return this.raffleApi
      .find({
        where: { isDeleted: false, endDate: { lt: new Date() } },
        include: ['product']
      })
      .pipe(
        switchMap((oldRaffles: RaffleDraw[]) => {
          this.oldRaffles = oldRaffles;

          return this.getRandomUsers(oldRaffles.length);
        }),
        map((joins) => {
          return this.oldRaffles.map((entry, i) => {
            return { raffleDraw: entry, account: { contact: joins[i] } };
          });
        })
      );
  }

  public getRandomUsers(res) {
    return this.http.get(`https://randomuser.me/api/?results=${res}`).pipe(
      map((data: any) => {
        return data.results.map((item) => {
          return {
            firstName: item.name.first,
            lastName: item.name.last,
            title: item.name.title,
            picture: item.picture.large,
            town: counties[this.getRandomInt(counties.length)].name
          };
        });
      })
    );
  }
}
