export class CardModel {
  car: string;
  flipped: boolean;
  matched: boolean;
  id: number;

  constructor(car: string, flipped: boolean, matched: boolean, id: number = 0) {
    this.car = car;
    this.flipped = flipped;
    this.matched = matched;
  }
}
