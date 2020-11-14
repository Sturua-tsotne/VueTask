import * as R from 'ramda'


class TplModel {
    constructor(deals = {}) {
        this.id = R.is(Number, deals.id) ? deals.id : 0
        this.name = R.is(String, deals.name) ? deals.name : ''
        this.lastname = R.is(String, deals.lastname) ? deals.lastname : ''
        this.personalnumber = R.length(String, deals.personalnumber) ? deals.personalnumber : ''
        this.dateBirth = R.is(Date, deals.dateBirth) ? deals.dateBirth : ''
        this.mobileNumber = R.is(String, deals.mobileNumber) ? deals.mobileNumber : ''
        this.email = R.is(String, deals.email) ? deals.email : ''
        this.identityImg = R.is(String, deals.identityImg) ? deals.identityImg : ''
        this.status = R.is(Boolean, deals.status) ? deals.status : false

        this.carRegistrationNumber=R.is(String, deals.carRegistrationNumber) ? deals.carRegistrationNumber: ''
        this.carReleaseTime =R.is(String, deals.carReleaseTime) ? deals.carReleaseTime : ''
        
       
        this.ManufacturersId = R.is(Number,deals.ManufacturersId) ? deals.ManufacturersId:null
        this.TplConditionId = R.is(Number,deals.TplConditionId) ? deals.TplConditionId:null
        this.modelId = R.is(Number,deals.modelId) ? deals.modelId:null

    }

    isValid() {
        return !(this.name === '' || this.lastname === '' || this.personalnumber === ''
            || this.dateBirth === '' || this.mobileNumber === '' || this.email === '' ||
            this.identityImg === ''||this.carRegistrationNumber===''||
            this.carReleaseTime==''|| this.ManufacturersId ===null || this.TplConditionId===null
            || this.modelId  ===null  )
    }

    toJsonObject() {
        return {
            'name': this.name,
            'lastname': this.lastname,
            'personalnumber': this.personalnumber,
            'dateBirth': this.dateBirth,
            'mobileNumber': this.mobileNumber,
            'email': this.email,
            'identityImg': this.identityImg,
            'status': this.status,
             'carRegistrationNumber':this.carRegistrationNumber,
             'carReleaseTime':this.carReleaseTime,
             'ManufacturersId':this.manufacturersId,
             'TplConditionId':this.tplConditionId,
             'modelId':this.modelId
        }

    }
    fromJsonObject(obj) {
        this.name = obj.name
        this.lastname = obj.lastname
        this.personalnumber = obj.personalnumber
        this.dateBirth = obj.dateBirth
        this.mobileNumber = obj.mobileNumber
        this.email = obj.email
        this.identityImg = obj.identityImg
        this.Active = obj.status
        this.carRegistrationNumber=obj.carRegistrationNumber
        this.carReleaseTime=obj.carReleaseTime
        this.manufacturersId=obj.manufacturersId
        this.tplConditionId=obj.tplConditionId
        this.modelId=obj.modelId
    }
}

export default TplModel