import { IServer } from "./IServer"
import { Server } from "./Server"

export class ServerProxy implements IServer {
  private server: Server;

  constructor(public serverUrl: string) {
    this.server = new Server(serverUrl)
  }

  isUserLogged(): boolean {
    return Math.round(Math.random()) === 1
  }

  triggerPetition() {
    if (this.isUserLogged()) {
      this.server.triggerPetition()
    } else {
      console.log('User is not logged')
    }
  }
}