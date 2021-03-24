/**
 * Guardian Class
 * 
 */
const Person = require('./Person')

_profession = Symbol('profession')
_income = Symbol('income')
_children = Symbol['children']

class Guardian extends Person {

    constructor(id, name, profession, income) {
        super(id, name)
        this[_profession] = profession
        this[_income] = income
        this[_children] = []
    }

    get profession() {
        return this[_profession]
    }
    set profession(prof) {
        this[_profession] = prof
    }

    get income() {
        return this[_income]
    }
    set income(income) {
        this[_income] = income
    }

    get childrens() {
        return this[_children]
    }
    set addChildren(children) {
        this[_children].push(children)
    }

    toString() {
        return `${super.toString()}, Profession - ${this[_profession]}, Income - ${this[_income]}, Children - ${this[_children]}`
    }
}

module.exports = Guardian