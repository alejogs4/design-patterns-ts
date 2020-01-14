import { ISocialMediaVideo } from "./ISocialMediaVideo"
// Target
import { InstragramVideo } from "./InstragramVideo"

export class InstragramVideoAdapter implements ISocialMediaVideo {
  private instagramVideo: InstragramVideo;

  constructor(public url: string) {
    this.instagramVideo = new InstragramVideo(this.url)
  }

  play() {
    this.instagramVideo.runVideo()
  }

  pause() {
    this.instagramVideo.initVideoAgain()
    this.instagramVideo.seek(10)
  }

  setVolume() {
    this.instagramVideo.setVolume(10)
  }

  downloadVideo() {
    this.instagramVideo.saveVideo()
  }
}