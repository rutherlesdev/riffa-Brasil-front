import { Directive, ElementRef, Input, OnChanges, Renderer } from '@angular/core';

@Directive({
  selector: '[imageLoader]'
})
export class ImageLoaderDirective implements OnChanges {

  /**
   * holds image path assigned to attribute
   * @property imageLoader
   * @type any
   */
  @Input('imageLoader') public imageLoader: any;

  /**
   * holds element reference of directive
   * @property element
   * @type any
   */
  public element: any;

  /**
   * gets image spinner from assets and assign to background image
   * set css styles
   * @method contructor
   * @param el
   * @param renderer
   */
  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
    this.element = el.nativeElement;
    this.element.style.backgroundImage = 'url(./assets/images/spinner.gif)';
    this.renderer.setElementStyle(this.element, 'background-size', '50px 50px');
    this.renderer.setElementStyle(this.element, 'background-position', 'center');
    this.renderer.setElementStyle(this.element, 'background-repeat', 'no-repeat');
  }

  /**
   * on changes call _loadImage method
   * @method ngOnChanges
   * @param changes
   */
  public ngOnChanges(changes) {
    if (changes.imageLoader) {
      this._loadImage();
    }
  }

  /**
   * list on image event 'load' and append new image url to background image,
   * if image is not defined use a placeholder
   * @method _loadImage
   * @private
   */
  private _loadImage() {
    const image = new Image();
    image.addEventListener('load', () => {
      this.element.style.backgroundImage = `url(${this.imageLoader ? this.imageLoader : '../assets/images/placeholder.png'})`;
      this.renderer.setElementStyle(this.element, 'background-size', 'cover');
      this.renderer.setElementStyle(this.element, 'background-color', 'none');
    });

    image.src = this.imageLoader ? this.imageLoader : '../assets/images/placeholder.png';

  }
}
