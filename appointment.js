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
 if(availableDoc.length>0){
 const appointmentDate= appointmentDate[0]
 const appointment = new Appointment(doctor,patient,appointmentDate)  
 console.log(`appointment for ${patient.name}with ${doctor.name}at ${appointmentDate}`);
 return appointment
 } else {
    console.log("no appointment at this time");
 }
}

const drAgnes = new Doctor("Dr.Agnes","gynaecologist"["14-5-2024","16-5-2024","20-5-2024"] )
const patientAjema =new Patient("Aggy Ajema",["15-5-2024","17-5-2024","21-5-2024"])
const appointment = bookAppointment(drAgnes,patientAjema)