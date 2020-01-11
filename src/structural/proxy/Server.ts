import { IServer } from "./IServer"

export class Server implements IServer {
  constructor(public serverUrl: string){}

  triggerPetition() {
    console.log(`Making petition to ${this.serverUrl}`)
  }
}