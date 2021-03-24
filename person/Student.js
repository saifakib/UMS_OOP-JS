/**
 * Student Class
 * 
 */

const UniPerson = require('./UniPerson')

 _studentId = Symbol('studentId')
 _guardian = Symbol('guardian')
 _exams = Symbol('exams')
 _fee = Symbol('fee')

 class Student extends UniPerson{
    constructor(id, name, studentId, guardian) {
        super(id, name)
        this[_studentId] = studentId
        this[_guardian] = guardian
        this[_exams] = []
        this[_fee] = null

    }

    get studentId() {
        return this[_studentId]
    }
    set studentId(id) {
        this[_studentId] = id
    }

    get guardian() {
        return this[_guardian]
    }
    set guardian(guardian) {
        this[_guardian] = guardian
    }

    get exams() {
        return this[_exams]
    }
    set exams(exam) {
        this[_exams] = exam
    }
    set addExam(exam) {
        this[_exams].push(exam)
    }

    get fee() {
        return this[_fee]
    }
    set fee(fee) {
        this[_fee] = fee
    }

    toString() {
        return `${super.toString()}, StudentId - ${this[_studentId]}, Guardian - ${this[_guardian]}`
    }
 }

 module.exports = Student