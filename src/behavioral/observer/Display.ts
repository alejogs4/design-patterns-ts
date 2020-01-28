import { Match } from "./Match";
import { IObserver } from "./IObserver"

export class Display implements IObserver<Match> {
  notify(match: Match) {
    console.log('New state of the match', match)
  }
}