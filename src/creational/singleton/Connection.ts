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