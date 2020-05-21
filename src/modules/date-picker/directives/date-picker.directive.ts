import { AfterViewInit, Directive, ElementRef, forwardRef, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Pikaday from 'pikaday-time';
import { Extender } from '../../../common/helpers/extender';

@Directive({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerDirective),
      multi: true
    },
  ],
  selector: '[datePicker]',
  exportAs: 'datePicker',
})
export class DatePickerDirective extends Extender implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() public defaultDate: Date = new Date();
  @Input() public displayDayFn: (date: Date) => boolean = null;
  @Input() public minDate: Date = null;
  @Input() public maxDate: Date = null;
  public currentDate: string = null;
  private _pikaday: Pikaday;
  public onChange = (_: any) => { };
  public onTouch = () => { };

  constructor(
    protected injector: Injector,
    private _elementRef: ElementRef
  ) {
    super(injector);
  }

  public ngOnInit(): void {
    this._pikaday = new Pikaday({
      field: this._elementRef.nativeElement,
      format: 'DD/MM/YYYY H:mm',
      // defaultDate: this.currentDate,
      setDefaultDate: false,
      disableDayFn: this.displayDayFn,
      minDate: this.minDate,
      maxDate: this.maxDate,
      onSelect: (date: Date) => {
        this.onSelect(date);
      }
    });
  }

  public onSelect(date) {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    this.currentDate = date.toLocaleDateString();
    this.onChange(date);
  }

  public ngOnDestroy(): void {
    this._pikaday.destroy();
  }

  public writeValue(obj: any): void {
    this.currentDate = obj;
    this.onChange(this.currentDate);
    if (this.currentDate) {
      this._pikaday.setDate(this.currentDate);
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public toggle(): void {
    if (!this._pikaday.isVisible()) {
      this._pikaday.show();
    } else {
      this._pikaday.destroy();
    }

  }

  public clear(): void {
    this._elementRef.nativeElement.value = '';
    // this._pikaday.clear();
  }

}
