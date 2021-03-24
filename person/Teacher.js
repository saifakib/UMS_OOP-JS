/**
 * Teacher Class
 */

 const Employee = require('./Employee')

 _subjects = Symbol('subjects')

 class Teacher extends Employee {

    constructor(id, name, employeeId, salary, subjects){
        super(id, name, employeeId, salary)
        this[_subjects] = subjects
    }

    get subjects() {
        return this[_subjects]
    }
    set subjects(subj) {
        this[_subjects] = subj
    }

    toString() {
        return `${super.toString()}, Subjects: ${this[_subjects]}`
    }
 }

 module.exports = Teacher