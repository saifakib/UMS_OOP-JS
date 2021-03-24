/**
 * Employee Class
 * 
 */

const UniPerson = require('./UniPerson')

 _employeeId = Symbol('employeeId')
 _salary = Symbol('salary')

 class Employee extends UniPerson{
    constructor(id, name, employeeId, salary) {
        super(id, name)
        this[_employeeId] = employeeId
        this[_salary] = salary

    }

    get employeeId() {
        return this[_employeeId]
    }
    set employeeId(id) {
        this[_employeeId] = id
    }

    get salary() {
        return this[_salary]
    }
    set salary(salary) {
        this[_salary] = salary
    }

    toString() {
        return `${super.toString()}, EmployeeId - ${this[_employeeId]}, Salary - ${this[_salary]}`
    }
 }

 module.exports = Employee