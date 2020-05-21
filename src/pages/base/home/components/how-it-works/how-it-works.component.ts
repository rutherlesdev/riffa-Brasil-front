import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  public items: any[] = [
    'Pick a Competition you want to enter',
    'Choose how many numbers you would like in the raffle',
    'Dont see your number, try the Lucky Dip button',
    'Review & Complete Payment',
    'Sit back and wait for the raffle to complete. Our AI system will automatically choose the winner and notify you whether you won or not.'
  ];
  constructor() { }

  public ngOnInit() {
  }

}
