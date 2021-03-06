import { Component, OnInit } from '@angular/core';
import { CardModel } from './card.model';
import { CardsService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  frontCard: CardModel[] = [];

  back = 'back.svg';

  lock = false;
  flipped = false;
  first: any = {};
  second: any = {};
  cardsMatched = 0;

  constructor(private cardService: CardsService) { }

  ngOnInit() {
    this.frontCard = this.cardService.shuffleCards(
      this.cardService.getFrontCard()
    );
    this.frontCard.splice(15);
    this.frontCard = this.cardService.shuffleCards(
      this.cardService.addIndex(this.cardService.duplicateCards(this.frontCard)));
  }

  resetFlips() {
    setTimeout(() => {
      [this.first.flipped, this.second.flipped] = [false, false];
      [this.first, this.second] = [{}, {}];
      this.lock = false;
    }, 700);
  }

  preCheck(card: CardModel) {
    if (this.lock || card.matched) {
      return true;
    }
    return false;
  }

  clickCheck(card: CardModel) {
    card.flipped = !card.flipped;
    if (!this.first.hasOwnProperty('car')) {
      this.first = card;
    } else if (!this.second.hasOwnProperty('car')) {
      this.second = card;
    }
  }

  matchCheck(card: CardModel) {
    if (this.first.car !== this.second.car) {
      this.lock = true;
      this.resetFlips();
      return false;
    }
    return true;
  }
  matchedCards(card: CardModel) {
    this.cardsMatched++;
    [this.first.matched, this.second.matched] = [true, true];
    [this.first, this.second] = [{}, {}];
  }

  flipCard(card: CardModel) {
    if (this.preCheck(card)) {
      return;
    }
    this.clickCheck(card);
    if (this.matchCheck(card)) {
      this.matchedCards(card);
    }
  }

  flipDeck() {
    for (const card of this.frontCard) {
      card.flipped = true;
      card.matched = true;
    }
  }

  resetGrid() {
    window.location.reload();
  }
}
