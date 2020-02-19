import { IHandler } from "./IHandler";

export class Adviser implements IHandler {
  constructor(private successor: IHandler) {}

  authorize(value: number): number {
    if (value < 2000) {
      return value
    }

    return this.successor.authorize(value)
  }
}
