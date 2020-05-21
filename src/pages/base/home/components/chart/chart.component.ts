import { Component, OnInit } from '@angular/core';
import { RaffleEntry, RaffleEntryApi } from '../../../../../common/sdk';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public raffleEntries: RaffleEntry[] = [];

  public lineChartData = {
    labels: this.raffleLabels(),
    options: {
      responsive: true,
      hoverMode: 'index',
      stacked: true,
      title: {
        display: false,
        text: 'Players Saved'
      },
      scales: {
        yAxes: [
          {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            stacked: true,
            position: 'left',
            id: 'y-axis-1'
          },
          {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            position: 'right',
            id: 'y-axis-2',

            // grid line settings
            gridLines: {
              drawOnChartArea: false,
              display: false // only want the grid lines for one axis to show up
            }
          }
        ]
      }
    },
    datasets: [
      {
        label: 'Retail Price',
        borderColor: 'red',
        backgroundColor: 'red',
        fill: true,
        data: this.raffleRetailPriceDataset(),
        yAxisID: 'y-axis-1'
      }
    ]
  };
  public show: boolean = false;

  constructor(private _raffleEntryApi: RaffleEntryApi) {}

  public ngOnInit() {
    this._raffleEntryApi
      .find({
        fields: ['accountId', 'raffleDrawId'],
        where: { isDeleted: false, isWinningEntry: true },
        include: [
          {
            relation: 'account',
            scope: {
              fields: ['id'],
              include: {
                relation: 'contact',
                scope: { fields: ['id'] }
              }
            }
          },
          {
            relation: 'raffleDraw',
            scope: {
              fields: ['productId', 'price', 'retailPrice'],
              include: {
                relation: 'product',
                scope: { fields: ['name'] }
              }
            }
          }
        ]
      })
      .subscribe((data: RaffleEntry[]) => {
        this.raffleEntries = data;
        this.lineChartData.datasets = [
          {
            label: 'Retail Price',
            borderColor: 'rgba(255, 0, 0, 0.5)',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: true,
            data: this.raffleRetailPriceDataset(),
            yAxisID: 'y-axis-1'
          },
          {
            label: 'Players Saved',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            fill: true,
            data: this.rafflePriceDataset(),
            yAxisID: 'y-axis-2'
          }
        ];
        this.lineChartData.labels = this.raffleLabels();
        this.show = true;
      });
  }

  public raffleRetailPriceDataset(): number[] {
    return this.raffleEntries
      .filter(entry => entry.isWinningEntry === true)
      .map(entry => entry.raffleDraw.retailPrice);
  }

  public raffleLabels(): string[] {
    return this.raffleEntries
      .filter(entry => entry.isWinningEntry === true)
      .map(entry => entry.raffleDraw.name);
  }

  public rafflePriceDataset(): number[] {
    return this.raffleEntries
      .filter(entry => entry.isWinningEntry === true)
      .map(entry => entry.raffleDraw.price);
  }
}
