/**
 * 
 * Department Class
 */

_id = Symbol('id')
_name = Symbol('name')
_subjects = Symbol('subjects')
_dean = Symbol('dean')
_teachers = Symbol('teachers')

class Department {

    constructor({id, name, subject, dean, teacher }) {

        this[_id] = id
        this[_name] = name || ''
        this[_subjects] = subject || []
        this[_dean] = dean || null
        this[_teachers] = teacher || []
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

    get subjects() {
        return this[_subjects]
    }
    set subjects(value) {
        this[_subjects] = value
    }
    set addSubject(subj) {
        this[_subjects].push(subj)
    }

    get dean() {
        return this[_dean]
    }
    set dean(dean) {
        this[_dean] = dean
    }

    get teachers() {
        return this[_teachers]
    }
    set teachers(value) {
        this[_teachers] = value
    }
    set addTeacher(teacher) {
        this[_teachers].push(teacher)
    }

    toString() {
        return `
        Id: ${this[_id]},
        Name: ${this[_name]},
        Subject: ${this[_subjects]}
        `
    }
} 

module.exports = Department