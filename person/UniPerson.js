/**
 * UniPerson Class
 * 
 */

const Person = require('./Person')

 _department = Symbol('department')
 _account = Symbol('account')

 class UniPerson extends Person{
    constructor(id, name) {
        super(id, name)
        this[_department] = null
        this[_account] = null
    }

    get department() {
        return this[_department]
    }
    set department(dept) {
        this[_department] = dept
    }

    get account() {
        return this[_account]
    }
    set account(acc) {
        this[_account] = acc
    }

    toString() {
        return `${super.toString()}, Department - ${this[_department]},Account - ${this[_account]} `
    }
 }

 module.exports = UniPerson