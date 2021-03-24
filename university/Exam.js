/**
 * 
 * Exam Class
 */

_id = Symbol('id')
_name = Symbol('name')
_subject = Symbol('subject')
_passmark = Symbol('passmark')

class Exam {

    constructor({id, name, subject, passmark }) {

        this[_id] = id
        this[_name] = name || ''
        this[_subjects] = subject || null
        this[_passmark] = passmark || 33
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

    get subject() {
        return this[_subject]
    }
    set subject(value) {
        this[_subject] = value
    }

    get passmark() {
        return this[_passmark]
    }
    set passmark(passmark) {
        this[_passmark] = passmark
    }

    toString() {
        return `
        Id: ${this[_id]},
        Name: ${this[_name]},
        Subject: ${this[_subject]},
        Pass Mark: ${this[_passmark]}
        `
    }
} 

module.exports = Exam