import { Match } from "./Match";
import { IObserver } from "./IObserver"

export class Smartphone implements IObserver<Match> {
  notify(match: Match) {
    console.log('New state of the match in smartphone', match)
  }
}