import { Query } from './Query'
// Concret prototype
export class Product extends Query {
  constructor(database: string, user: string, table: string) {
    super(database, user, table)
  }

  clone(): Product {
    return new Product(this._database, this._user, this._table)
  }

  makeQuery(): void {
    console.log(`[Product] Query to table ${this._table} of ${this._database} database with user ${this._user}`)
  }
}