/**
 * 
 * Subject Class
 */

_id = Symbol('id')
_name = Symbol('name')
_credit = Symbol('credit')

class Subject {

    constructor({id, name, credit }) {

        this[_id] = id
        this[_name] = name || ''
        this[_credit] = credit || 0
    }

    get id() {
        return this[_id]
    }

    get name() {
        return this[_name]
    }
    set name(value) {
        this[_name] = value
    }
    get credit() {
        return this[_credit]
    }
    set credit(credit) {
        this[_credit] = credit
    }

    toString() {
        return `
        Id: ${this[_id]},
        Name: ${this[_name]},
        Credit: ${this[_credit]}
        `
    }
} 

module.exports = Subject