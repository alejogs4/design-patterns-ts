import { IHandler } from "./IHandler";

export class Manager implements IHandler {
  authorize(value: number): number {
    if (value < 20000) {
      return value
    }

    return 0
  }
}