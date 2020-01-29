import { Salary } from "./Salary";

export class ColombianSalary extends Salary {

  withdrawHealth(salary: number) {
    const withdraw = salary * 0.04
    return salary - withdraw
  }

  withdrawInsurance(salary: number) {
    const withdraw = salary * 0.05
    return salary - withdraw
  }

}