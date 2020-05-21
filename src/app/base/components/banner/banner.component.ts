import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../common/helpers/extender';
import { Content, ContentApi } from '../../../../common/sdk';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends Extender implements OnInit {

  public bannerNav: Content[] = [];

  public bannerImages: { image: string, link: string }[] = [
    {
      image: '/assets/images/banner/footer-gambleaware.png',
      link: 'https://www.begambleaware.org/'
    },
    {
      image: '/assets/images/banner/footer-plus16.png',
      link: 'https://google.co.uk'
    },
    {
      image: '/assets/images/banner/footer-secure.png',
      link: 'https://google.co.uk'
    },
    {
      image: '/assets/images/banner/GamCare.png',
      link: 'https://www.gamcare.org.uk/'
    },
    {
      image: '/assets/images/banner/GBGA.png',
      link: 'http://gbga.gi/'
    },
    {
      image: '/assets/images/banner/hmgib.png',
      link: 'https://www.gibraltar.gov.gi/'
    },
  ];

  constructor(
    protected injector: Injector,
    private _contentApi: ContentApi
  ) {
    super(injector);
  }

  public ngOnInit() {

    this._contentApi.find({ where: { isDeleted: false } })
      .subscribe((data: Content[]) => {
        this.bannerNav = data.filter((datum) => datum.type.indexOf('Footer') !== -1);
      });
  }

}
