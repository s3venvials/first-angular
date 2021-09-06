import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() appVersion: Number;

  constructor() { 
    this.appVersion = 1.0;
  }

  ngOnInit(): void {
  }

}
