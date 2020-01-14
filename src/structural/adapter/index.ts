// Client
// Adapter
import { InstragramVideoAdapter } from "./InstragramVideoAdapter"
// Target
import { InstragramVideo } from "./InstragramVideo"
// Adaptee
import { ISocialMediaVideo } from "./ISocialMediaVideo"

// Elements
import { TwitterVideo } from "./TwitterVideo"
import { FacebookVideo } from "./FacebookVideo"

const socialMediaVideoTwitter: ISocialMediaVideo = new TwitterVideo('Test1')
const socialMediaVideoFacebook: ISocialMediaVideo = new FacebookVideo('Test2')
const socialMediaVideoInstragram: ISocialMediaVideo = new InstragramVideoAdapter('Test3')

socialMediaVideoTwitter.downloadVideo()
socialMediaVideoFacebook.downloadVideo()
socialMediaVideoInstragram.downloadVideo()