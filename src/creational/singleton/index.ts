import { Connection } from './Connection'

const connection: Connection = Connection.getInstance('Url');
const newConnection: Connection = Connection.getInstance('Url');

console.log(connection === newConnection);

(async () => {
  const test: object = await connection.getRequest('Test')
  console.log(test)
})()