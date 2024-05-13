class Doctor{
    constructor(name,skill){
        this.name=name,
        this.skill=name,
        this.availability=[]
    }
    addAvailability(time,date){
     const available ={date:date,time:time}
     this.availability.push(available)
    }
}

class Patient{
    constructor(name,condition,preference,age){
        this.name=name,
        this.condition=condition,
        this.preference=preference,
        this.age=age
    }
}
class Appointment{
    constructor(doctor,patient,date){
        this.doctor=doctor,
        this.patient=patient,
        this.date=date
    }
}
function bookAppointment(doctor,patient) {
 const availableDoc =doctor.availability.filter(date => !patient.condition.include(date))   
}