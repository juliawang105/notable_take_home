# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Physician.destroy_all 
Patient.destroy_all 
Appointment.destroy_all

#Physicians 
hibbert = Physician.create!({f_name: 'Julius', l_name: 'Hibbert', email: 'hibbert@notablehealth.com'})
krieger = Physician.create!({f_name: 'Algemop', l_name: 'Krieger', email: 'krieger@notablehealth.com'})
riviera = Physician.create!({f_name: 'Nick', l_name: 'Riviera', email: 'riviera@notablehealth.com'})

#Patients 
archer = Patient.create!({f_name: 'Sterling', l_name: 'Archer'})
figis= Patient.create!({f_name: 'Cyril', l_name: 'Figis'})
gilette = Patient.create!({f_name: 'Ray', l_name: 'Gilette'})
kane = Patient.create!({f_name: 'Lana', l_name: 'Kane'})
poovey = Patient.create!({f_name: 'Pam', l_name: 'Poovey'})

#Appointments 
Appointment.create({patient_id: archer.id, physician_id: krieger.id, time: Time.now, kind: 'New Patient'})
Appointment.create({patient_id: figis.id, physician_id: krieger.id, time: Time.now + 3000, kind: 'Follow-up'})
Appointment.create({patient_id: gilette.id, physician_id: krieger.id, time: Time.now + 6000, kind: 'Follow-up'})
Appointment.create({patient_id: kane.id, physician_id: krieger.id, time: Time.now + 9000, kind: 'New Patient'})
Appointment.create({patient_id: poovey.id, physician_id: krieger.id, time: Time.now + 15000, kind: 'New Patient'})