import { Query } from './Query'

// Concret prototype
export class User extends Query {
  constructor(database: string, user: string, table: string) {
    super(database, user, table)
  }

  clone(): User {
    return new User(this._database, this._user, this._table)
  }

  makeQuery(): void {
    console.log(`[User] Query to table ${this._table} of ${this._database} database with user ${this._user}`)
  }
}