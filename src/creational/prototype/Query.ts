// Prototype

export abstract class Query {
  constructor(
    protected _database: string,
    protected _user: string,
    protected _table: string
  ) {}

  abstract clone(): Query

  get database(): string {
    return this._database
  }

  set database(database: string) {
    this._database = database
  }

  get user(): string {
    return this._user
  }

  set user(user: string) {
    this._user = user
  }

  get table(): string {
    return this._table
  }

  set table(table: string) {
    this._table = table
  }
}