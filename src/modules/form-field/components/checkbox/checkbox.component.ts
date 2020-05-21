import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { InputRefDirective } from '../../directive/input-ref/input-ref.directive';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements AfterContentInit {

  @Input() public label: string = '';
  @Input() public inline: boolean = false;
  @ContentChild(InputRefDirective) public input: InputRefDirective;
  private readonly: boolean;

  @HostBinding('class.checked')
  public get gethasBeenChecked(): boolean {
    return this.input && this.input.element.checked;
  }

  @HostBinding('class.is-dirty')
  public get getDirtyState(): boolean {
    return this.input ? this.input.control.dirty : false;
  }

  @HostBinding('class.is-pristine')
  public get getPristineState(): boolean {
    return this.input ? this.input.control.pristine : false;
  }

  @HostBinding('class.readonly')
  public get getReadOnlyState(): boolean {
    return this.input && this.readonly;
  }

  @HostBinding('class.is-valid')
  public get getValidState(): boolean {
    return this.input ? this.input.control.valid : false;
  }

  @HostBinding('class.is-invalid')
  public get getInvalidState(): boolean {
    return this.input ? this.input.control.invalid : false;
  }

  @HostBinding('class.is-touched')
  public get getTouchedState(): boolean {
    return this.input ? this.input.control.touched : false;
  }

  @HostBinding('class.disabled')
  public get isDisabled(): boolean {
    return this.input && this.input.element.disabled;
  }

  constructor() { }

  public ngAfterContentInit(): void {
    if (!this.input) {
      console.error('checkbox needs an input element');
    }
    if (this.input.element.type !== 'checkbox') {
      console.error('input element must be of type checkbox');
    }

    this.readonly = this.input.element.readOnly;
    this.input.element.id = this.input.element.name;
    this.input.element.classList.add('form-check-input');
  }

}
