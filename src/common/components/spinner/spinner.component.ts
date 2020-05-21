import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() public isLoading: boolean = false;
  @Input() public slingo: boolean = false;

  constructor() { }

  public ngOnInit() {
  }

}
