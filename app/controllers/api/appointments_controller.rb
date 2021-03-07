class Api::AppointmentsController < ApplicationController
  def index 
    @physician = Physician.includes(:patients, :appointments).find_by(id: params[:physician_id])
  end
end
