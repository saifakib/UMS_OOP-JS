const { Guardian, Student, Teacher, Stuff } = require('./person')
const { Contact, Address } = require('./contact')
const { Department, Subject } = require('./university')

/**
 * Guardian 1
 */
const guardian = new Guardian(1, 'Mr. Guardin 1', 'Doctor', 200000)
guardian.blood = 'A+'

const guardianContact = new Contact({
    id: 1,
    email: 'guardian@gmail.com',
    phone: '0187589745'
})

guardian.contact = guardianContact
guardian.contact.address = new Address({
    id: 1,
    roadNo: '5C',
    city: 'Lakhipur',
    region: 'Chittagong',
    country: 'Bangladesh',
    postalCode: '3405'

})

/**
 * Department CSE
 */
const dept = new Department({
    id: 001,
    name: 'CSE',
    subject: [
        new Subject({ id: 01, name: 'Numerical Method', credit: 4 }),
        new Subject({ id: 02, name: 'Data Structure', credit: 4 }),
        new Subject({ id: 03, name: 'Software Testing', credit: 3 }),
        new Subject({ id: 04, name: 'Computer Networks', credit: 2 }),
    ]
})

dept.addSubject = new Subject({ id: 05, name: 'Database Design', credit: 3 })

/**
 * Student 1
 */
const student = new Student(1, 'Student 1', 'S001', guardian)
student.blood = 'B+'
student.contact = new Contact({
    id: 2,
    email: 'student1@gmail.com',
    phone: student.guardian.contact.phone,
    address: student.guardian.contact.address
})

student.department = dept
student.department.addSubject = new Subject({ id: 06, name: 'Database System', credit: 3 })
const totalCredit = student.department.subjects.reduce((a, b) => a += b.credit, 0)


/**
 * Teacher 
 */
const dean = new Teacher(01, 'Mr Rafiqul', 02, '50000', dept.subjects[0])

dept.dean = dean

const teacher1 = new Teacher(01, 'Mr Bulbul', 03, '40000', dept.subjects[1])
const teacher2 = new Teacher(01, 'Mr Saif', 04, '40000', dept.subjects[2])

dept.addTeacher = teacher2
dept.addTeacher = dean
dept.addTeacher = teacher1

const findSubject = () =>{
    student.department.teachers.forEach((teacher, index) => {
        console.log(`${index + 1 } - ${teacher.name} - ${teacher.subjects.name} `)
    })
}
findSubject()

console.log(student.toString())
