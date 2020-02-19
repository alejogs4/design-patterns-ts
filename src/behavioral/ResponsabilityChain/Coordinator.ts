import { IHandler } from "./IHandler";

export class Coordinator implements IHandler {
  constructor(private successor: IHandler) {}

  authorize(value: number): number {
    if (value < 10000) {
      return value;
    }

    return this.successor.authorize(value);
  }
}
