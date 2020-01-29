import { Salary } from "./Salary";

export class AmericanSalary extends Salary {
  withdrawHealth(salary: number) {
    const withdraw = salary * 0.1
    return salary - withdraw
  }

  withdrawInsurance(salary: number) {
    const withdraw = salary * 0.06
    return salary - withdraw
  }
}