import { Component, OnInit } from '@angular/core';
import { Card } from '../card/Card';
import { CardService } from '../..//services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => this.cards = cards);
  }
}
