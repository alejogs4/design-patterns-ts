export class Customer {
  constructor(private id: number){}

  verifyUserId():boolean {
    return this.id < 20
  }
}