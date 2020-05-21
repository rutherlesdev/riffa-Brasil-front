import { Component, Input, OnInit } from '@angular/core';
import { RaffleEntry } from '../../sdk';

@Component({
  selector: 'app-winner-card',
  templateUrl: './winner-card.component.html',
  styleUrls: ['./winner-card.component.scss']
})
export class WinnerCardComponent implements OnInit {

  @Input() public winner: RaffleEntry = new RaffleEntry();

  constructor() { }

  public ngOnInit() {
  }

}
