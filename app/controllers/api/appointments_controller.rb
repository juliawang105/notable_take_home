class Api::AppointmentsController < ApplicationController
  def index 
    # @appointments = Appointment.includes(:patient, :physician).where(physician_id: params[:physician_id]).where('appointments.time.to_date = Time.now.to_date)
    # debugger
    @physician = Physician.includes(:patients, :appointments).find_by(id: params[:physician_id])
  end
end
