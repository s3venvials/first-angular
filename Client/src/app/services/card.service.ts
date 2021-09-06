import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../components/card/Card';
import { CARDS } from '../components/card/mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  getCards(): Observable<Card[]> {
    const cards = of(CARDS);
    return cards;
  }
}
