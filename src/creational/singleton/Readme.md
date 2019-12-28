# Singleton
Singleton pattern is a creational design pattern which allow us to have a single instance of an object along one project
this is used for those objects that only are necessary in one ocassion such as database connection objects

## Example
```typescript
export class Connection {
  private databaseUrl: string;
  private static connection: Connection;

  constructor(databaseUrl: string) {
    this.databaseUrl = databaseUrl;
  }

  static getInstance(...args: string[]) {
    if (!this.connection) {
      this.connection = new Connection(args[0])
    }
    return this.connection
  }

  getRequest(endpoint: string): Promise<object> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ endpoint })
      }, 1000);
    })
  }
}
```

getInstance method it's a static method this will verify if connection property(Also static) has been initialized already, if it has not been initialized yet, it will assign it a new connection object but it has been initialized before simply it will return it.

With this approach we make sure that only one reference of the connection object will be used in our application

## Usage
```typescript
import { Connection } from './Connection'

const connection: Connection = Connection.getInstance('Url');
const newConnection: Connection = Connection.getInstance('Url');

// this is true because both identifiers connection and newConnection
// hold a reference to the same object
console.log(connection === newConnection);

(async () => {
  // Using our object normally
  const test: object = await connection.getRequest('Test')
  console.log(test)
})()
```