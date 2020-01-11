// Proxy
import { ServerProxy } from "./ServerProxy"
// Subject
import { IServer } from "./IServer"
// Real Subject
// import { Server } from "./Server"

const server: IServer = new ServerProxy("https://alejandrogarcia.dev")

server.triggerPetition()