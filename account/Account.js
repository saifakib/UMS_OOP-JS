/**
 * Acount Class
 */

_id = Symbol('id')
_type = Symbol('type')
_amount = Symbol('amount')
_time = Symbol('time')

class Account {

    constructor({ id, type, amount }) {
        this[_id] = id,
            this[_type] = type,
            this[_amount] = amount
        this[_time] = new Date()
    }

    get id() {
        return this[_id]
    }

    get type() {
        return this[_type]
    }

    get amount() {
        return this[_amount]
    }
    set amount(amount) {
        this[_amount] = amount
    }

    toString() {
        return `
        Id: ${this[_id]},
        Type: ${this[_type]}
        Amount: ${this[_amount]}
        `
    }
}

module.exports = Account