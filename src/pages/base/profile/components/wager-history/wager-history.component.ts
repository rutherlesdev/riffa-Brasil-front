import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { FireLoopRef, RaffleEntry, RealTime } from '../../../../../common/sdk';
import { ITableActions, ITableHeader } from '../../../../../modules/table/models/table';

@Component({
  selector: 'app-wager-history',
  templateUrl: './wager-history.component.html',
  styleUrls: ['./wager-history.component.scss']
})
export class WagerHistoryComponent extends Extender implements OnInit {

  public raffleEntries: RaffleEntry[] = [];
  public raffleEntriesBK: any[] = [];
  public raffleEntryRef: FireLoopRef<RaffleEntry>;
  public tableActions: ITableActions[] = [
    {
      color: 'text-secondary',
      icon: 'eye',
      text: 'View',
      event: () => { console.log('view clicked'); }
    }, {
      color: 'text-info',
      icon: 'pencil-square-o',
      text: 'Edit',
      event: (data) => { // this.addProduct(data);
      }
    }];
  public tableHeaders: ITableHeader[] = [
    {
      text: 'raffleDraw.name',
      formatted_text: 'Rifas',
      type: 'text',
    },
    {
      text: 'entryNumber',
      formatted_text: 'Seus números',
      type: 'badge:primary',
    },
    {
      text: 'isLuckyDip',
      formatted_text: 'Seleção aleatória',
      type: 'boolean',
    },
    {
      text: 'raffleDraw.price',
      formatted_text: 'Preço',
      type: 'currency',
    },
    {
      text: 'raffleDraw.startDate',
      formatted_text: 'Inicio',
      type: 'date:short',
    },
    {
      text: 'raffleDraw.endDate',
      formatted_text: 'Fim',
      type: 'date:dd/MM/yyyy',
    },
  ];
  public pageSize: number = 5;

  constructor(
    protected injector: Injector,
    private _rt: RealTime
  ) {
    super(injector);
    this._rt.onReady().subscribe(() => { });
  }

  public ngOnInit() {
    this.raffleEntryRef = this._rt.FireLoop.ref<RaffleEntry>(RaffleEntry);
    this._getRaffleEntries();
  }

  public onPageChange(page): void {
    const start = (page - 1) * this.pageSize;
    this.raffleEntries = this.raffleEntriesBK.slice(start, start + this.pageSize);
  }

  private _getRaffleEntries(): void {
    this.loading = true;
    this.raffleEntryRef.on('change', {
      where: { isDeleted: false, accountId: this.currentUser.id },
      include: {
        relation: 'raffleDraw', scope: { where: { isDeleted: false, endDate: { lt: new Date() } } }
      }
    }).subscribe((data: RaffleEntry[]) => {
      this.raffleEntries = this.raffleEntriesBK = data.filter((entry) => entry.raffleDraw);
      this.loading = false;
    });
  }
}
