import { Match } from "./Match";
import { Display } from "./Display";
import { Smartphone } from "./Smarthphone";

const classic = new Match()
const santiagoBernabeuDisplay = new Display()
const madridFansSmarthphones = new Smartphone()


classic.addObserver(santiagoBernabeuDisplay)
classic.addObserver(madridFansSmarthphones)

classic.increaseScore()
classic.countTime()