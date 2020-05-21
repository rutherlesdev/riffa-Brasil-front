import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Extender } from '../../../../../common/helpers/extender';
import {
  Content,
  ContentApi,
  FireLoopRef,
  RealTime
} from '../../../../../common/sdk';
import { CommonService } from '../../../../../common/services/common/common.service';
import { ITableActions } from '../../../../../modules/table/models/table';
import { ContentItemComponent } from '../content-item/content-item.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent extends Extender implements OnInit {
  public contents: Content[] = [];
  public tableActions: ITableActions[] = [
    {
      color: 'text-info',
      icon: 'pencil-square-o',
      text: 'Edit',
      event: (data, i) => {
        this.addContent(data);
      }
    },
    {
      color: 'text-danger',
      icon: 'trash-o',
      text: 'Delete',
      event: (data, i) => {
        this.delete(data);
      }
    }
  ];
  public tableHeaders: any[] = [
    {
      text: 'type',
      formatted_text: 'Type',
      type: 'text'
    },
    {
      text: 'title',
      formatted_text: 'Title',
      type: 'title'
    }
  ];
  public pageSize: number = 10;
  public contentsBK: any[] = [];
  public contentRef: FireLoopRef<Content>;

  constructor(
    protected injector: Injector,
    private _rt: RealTime,
    private _contentApi: ContentApi,
    private commonService: CommonService
  ) {
    super(injector);
    this._rt.onReady().subscribe(() => {});
  }

  public ngOnInit() {
    this.contentRef = this._rt.FireLoop.ref<Content>(Content);
    this._getContents();
  }

  public onPageChange(page): void {
    const start = (page - 1) * this.pageSize;
    this.contents = this.contentsBK.slice(start, start + this.pageSize);
  }

  public toggleDummyWinnerData() {
    if (!this.commonService.useWinnersDummyData.value) {
      this._contentApi
        .create({
          type: 'useWinnersDummyData',
          title: true
        })
        .subscribe(
          (_data) => {
            this.loading = false;
            this.commonService.useWinnersDummyData.next(_data);
          },
          (error: HttpErrorResponse) => {
            this.loading = false;
            this.toastr.error(error.message);
          }
        );
    } else {
      this._contentApi
        .deleteById(this.commonService.useWinnersDummyData.value.id)
        .subscribe(
          (_data) => {
            this.loading = false;
            this.commonService.useWinnersDummyData.next(null);
          },
          (error: HttpErrorResponse) => {
            this.loading = false;
            this.toastr.error(error.message);
          }
        );
    }
  }

  public addContent(content: Content = null): void {
    this.dialog.open(ContentItemComponent, content ? { data: content } : null);
  }

  private delete(item): void {
    this.dialog
      .openAlert({
        data: {
          config: {
            heading: 'Delete Raffle',
            body: 'Are you sure you want to delete this raffle?'
          },
          buttons: {
            buttons: [
              { text: 'Delete', color: 'danger', eventname: 'delete' },
              { text: 'Close', color: 'outline-danger', eventname: 'close' }
            ]
          }
        }
      })
      .afterClosed.subscribe((event) => {
        if (event === 'delete') {
          this.contentRef.remove(item).subscribe();
        }
      });
  }

  private _getContents(): void {
    this.loading = true;
    this.contentRef
      .on('change', { where: { isDeleted: false } })
      .subscribe((data: Content[]) => {
        this.contents = this.contentsBK = data;
        this.loading = false;
      });
  }
}
