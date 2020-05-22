import { Injectable } from '@angular/core';
import { CardModel } from './cards/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  frontCard = [
    { car: 'audiLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'bmwLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'bugattiLogo.png', flipped: false, matched: false, id: 0 },
    { car: 'ferrariLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'fiatLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'lamboLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'maybachLogo.jpeg', flipped: false, matched: false, id: 0 },
    { car: 'mbLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'mcLarenLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'nissanLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'opelLogo.png', flipped: false, matched: false, id: 0 },
    { car: 'porscheLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'RRlogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'teslaLogo.jpg', flipped: false, matched: false, id: 0 },
    { car: 'vwLogo.jpg', flipped: false, matched: false, id: 0 },
  ];
  constructor() { }

  getFrontCard() {
    return this.frontCard;
  }

  duplicateCards(array: CardModel[]) {
    const copy = array.map((x) => Object.assign({}, x));
    const clone = array.concat(copy);
    return clone;
  }
  shuffleCards(array: CardModel[]) {
    let counter = array.length;
    let temp;
    let randomizer;

    while (0 !== counter) {
      randomizer = Math.floor(Math.random() * counter);
      counter -= 1;

      temp = array[counter];
      array[counter] = array[randomizer];
      array[randomizer] = temp;
    }
    return array;
  }
  addIndex(array: CardModel) {
    array.forEach((item, index) => {
      item.id = index;
    });
    return array;
  }
}
