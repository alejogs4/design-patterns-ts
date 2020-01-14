export class InstragramVideo {
  constructor(private url: string) {}

  initVideoAgain() {
    console.log(`Initializing ${this.url} video again`)
  }

  seek(second: number) {
    console.log(`Seeking second ${second} of ${this.url} video`)
  }

  saveVideo() {
    console.log(`Saving video ${this.url} in device memory`)
  }

  setVolume(volume: number) {
    console.log(`New volume level ${volume} in Instragram`)
  }

  runVideo() {
    console.log(`Running video ${this.url}`)
  }
}