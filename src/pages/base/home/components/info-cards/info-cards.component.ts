import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../../common/helpers/extender';
import { Content, ContentApi } from '../../../../../common/sdk';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent extends Extender implements OnInit {

  public homeInfoLeftContent: Content = new Content();
  public homeInfoRightContent: Content = new Content();

  constructor(
    protected injector: Injector,
    private _contentApi: ContentApi
  ) {
    super(injector);
  }

  public ngOnInit() {
    this._contentApi.find({ where: { isDeleted: false } })
      .subscribe((data: Content[]) => {
        this.homeInfoLeftContent = data.find((datum) => datum.type.indexOf('Left') !== -1);
        this.homeInfoRightContent = data.find((datum) => datum.type.indexOf('Right') !== -1);
      });

  }

}
