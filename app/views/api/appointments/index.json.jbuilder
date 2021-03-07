
json.physician do 
  json.extract! @physician, :id, :f_name, :l_name, :email 
end

json.appointments do 
  @physician.appointments.each do |appt|
    json.set! appt.id do 
      json.extract! appt, :id, :time, :kind, :patient_id, :physician_id
      patient = Patient.find_by(id: appt.patient_id)
      json.patient_f_name patient.f_name 
      json.patient_l_name patient.l_name 
    end
  end
end
