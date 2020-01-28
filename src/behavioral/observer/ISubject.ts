import { IObserver } from './IObserver'

export interface ISubject {
  addObserver(observer: IObserver<ISubject>): void
  notifyObservers(): void
}