export class House {
  private _doors: number;
  private _bathrooms: number;
  private _pool: boolean;
  private _garage: boolean;

  constructor() {
    this._garage = this.garage
    this._pool = this.pool
    this._bathrooms = this.bathrooms
    this._doors = this.doors
  }

  set doors(doors: number) {
    this._doors = doors
  }

  set bathrooms(bathrooms: number) {
    this._bathrooms = bathrooms
  }

  set pool(pool: boolean) {
    this._pool = pool
  }

  set garage(garage: boolean) {
    this._garage = garage
  }

  get doors() {
    return this._doors
  }

  get bathrooms() {
    return this._bathrooms
  }

  get pool() {
    return this._pool
  }

  get garage() {
    return this._garage
  }
}