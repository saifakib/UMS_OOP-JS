/**
 * Contact Class
 * 
 */

_id = Symbol('id')
_email = Symbol('email')
_phone = Symbol('phone')
_alternativePhone = Symbol('alternativePhone')
_address = Symbol('address')

class Contact {

    constructor({id, email, phone, alternativePhone, address}) {

        this[_id] = id
        this[_email] = email || ''
        this[_phone] = phone || ''
        this[_alternativePhone] = alternativePhone || ''
        this[_address] = address || null
    }

    get id() {
        return this[_id]
    }

    get email() {
        return this[_email]
    }
    set email(value) {
        this[_email] = value
    }

    get phone() {
        return this[_phone]
    }
    set phone(value) {
        this[_phone] = phone
    }

    get alternativePhone() {
        return this[_alternativePhone]
    }
    set alternativePhone(value) {
        this[_alternativePhone] = alternativePhone
    }

    get address() {
        return this[_address]
    }
    set address(address) {
        this[_address] = address
    }

    toString() {
        return `
        Contact Id: ${this[_id]},
        Email: ${this[_email]},
        phone: ${this[_phone]},
        Alternative Phone: ${this[_alternativePhone]},
        Address: ${this[_address]}
        `
    }
} 

module.exports = Contact