import { ISocialMediaVideo } from "./ISocialMediaVideo"

export class FacebookVideo implements ISocialMediaVideo {
  constructor(public url: string) {}

  play() {
    console.log(`Playing ${this.url} in FB`)
  }

  pause() {
    console.log(`Video ${this.url} was paused in FB`)
  }

  downloadVideo() {
    console.log(`${this.url} is being downloaded from FB`)
  }

  setVolume(volume: number) {
    console.log(`New volume level ${volume} in FB`)
  }
}