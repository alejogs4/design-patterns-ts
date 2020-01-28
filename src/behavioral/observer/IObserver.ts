export interface IObserver<T> {
  notify(subject: T): void
}