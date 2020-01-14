import { ISocialMediaVideo } from "./ISocialMediaVideo"

export class TwitterVideo implements ISocialMediaVideo {
  constructor(public url: string) {}

  play() {
    console.log(`Playing ${this.url} in TW`)
  }

  pause() {
    console.log(`Video ${this.url} was paused in TW`)
  }

  downloadVideo() {
    console.log(`${this.url} is being downloaded from TW`)
  }

  setVolume(volume: number) {
    console.log(`New volume level ${volume} in TW`)
  }
}