/**
 * Stuff Class
 */

const Employee = require('./Employee')

_title = Symbol('title')

class Stuff extends Employee {

   constructor(id, name, employeeId, salary, title){
       super(id, name, employeeId, salary)
       this[_title] = title
   }

   get title() {
       return this[_title]
   }
   set title(subj) {
       this[_title] = subj
   }

   toString() {
       return `${super.toString()}, title: ${this[_title]}`
   }
}

module.exports = Stuff