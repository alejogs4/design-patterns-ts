// Behavior
export interface ListBehavior {
  addItem(str: string): void
  getItem(index: number): string
  getSize(): number
}