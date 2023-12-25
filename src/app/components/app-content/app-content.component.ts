import { Component, OnInit } from '@angular/core';
import { ButtonsCounterService } from '../../services/buttons-counter.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css'],
  providers: [ButtonsCounterService],
})
export class AppContentComponent implements OnInit {
  hasTenClicks: boolean = false;

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  constructor() {}

  ngOnInit() {}

  onButtonClicks(clicks: number) {
    this.hasTenClicks = clicks >= 10;
  }
}
