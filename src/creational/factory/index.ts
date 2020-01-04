import { Logistics } from './Logistics'
import { Transport } from './Transport'

const Logistic: Logistics = new Logistics()
// new delivery
const transport: Transport = Logistic.getTransport([5, 6])

transport.deliver('Cars')