import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addCounter() {
    return this.count++;
  }

  resetCounter() {
    return this.count = 0;
  }
}
