export interface ISocialMediaVideo {
  url: string
  play(): void
  pause(): void
  setVolume(volume: number): void
  downloadVideo(): void
}