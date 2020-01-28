import { ISubject } from "./ISubject";
import { IObserver } from "./IObserver";

export class Match implements ISubject {
  private _score: number = 0;
  private _time: number = 0;

  private observers: IObserver<Match>[] = [];

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.notify(this);
    });
  }

  addObserver(observer: IObserver<Match>) {
    this.observers.push(observer);
  }

  increaseScore() {
    this._score += 1;
    this.notifyObservers()
  }

  countTime() {
    this._time += 60
    this.notifyObservers()
  }

  get score(): number {
    return this._score
  }

  get time(): number {
    return this._time
  }
}
