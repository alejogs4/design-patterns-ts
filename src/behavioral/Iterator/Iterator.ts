export interface Iterator<T> {
  next(): T
  hasMore(): boolean
}