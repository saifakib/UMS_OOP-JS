/**
 * Address Class
 * 
 */

_id = Symbol('id')
_roadNo = Symbol('roadNo')
_city = Symbol('city')
_region = Symbol('region')
_postalCode = Symbol('postalCode')
_country = Symbol('country')

class Address {

    constructor({id, roadNo, city, region, postalCode, country}) {

        this[_id] = id
        this[_roadNo] = roadNo || ''
        this[_city] = city || ''
        this[_region] = region || ''
        this[_postalCode] = postalCode || ''
        this[_country] = country || ''
    }

    get id() {
        return this[_id]
    }

    get roadNo() {
        return this[_roadNo]
    }
    set roadNo(value) {
        this[_roadNo] = value
    }

    get city() {
        return this[_city]
    }
    set city(value) {
        this[_city] = city
    }

    get region() {
        return this[_region]
    }
    set region(value) {
        this[_region] = region
    }

    get postalCode() {
        return this[_postalCode]
    }
    set postalCode(value) {
        this[_postalCode] = postalCode
    }

    get country() {
        return this[_country]
    }
    set country(value) {
        this[_country] = country
    }

    toString() {
        return `
        Address Id: ${this[_id]},
        Road No: ${this[_roadNo]},
        City: ${this[_city]},
        Region: ${this[_region]},
        Postal Code: ${this[_postalCode]},
        Country: ${this[_country]}
        `
    }
} 

module.exports = Address