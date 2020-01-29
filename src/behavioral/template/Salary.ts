export abstract class Salary {
  constructor(private salary: number) {}

  calcSalary(withdrawCarity: boolean): number {
    this.salary = this.withdrawHealth(this.salary)
    this.salary = this.withdrawInsurance(this.salary)
    this.salary = withdrawCarity ?  this.salary - 50 : this.salary

    return this.salary
  }

  abstract withdrawHealth(salary: number): number
  abstract withdrawInsurance(salary: number): number
}