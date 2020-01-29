import { Salary } from "./Salary";
import { AmericanSalary } from "./AmericanSalary";
import { ColombianSalary } from "./ColombianSalary";


const colombianEmployeeSalary: Salary = new ColombianSalary(3500000)
console.log(`The salary of the colombian guy is ${colombianEmployeeSalary.calcSalary(false)}`)

const americanEmployeeSalary: Salary = new AmericanSalary(6500)
console.log(`The salary of the american guy is ${americanEmployeeSalary.calcSalary(true)}`)