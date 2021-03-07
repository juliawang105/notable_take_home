# == Schema Information
#
# Table name: appointments
#
#  id           :bigint           not null, primary key
#  patient_id   :integer
#  physician_id :integer
#  time         :datetime
#  kind         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Appointment < ApplicationRecord
  validates :patient_id, :physician_id, :time, :kind, presence: true 

  belongs_to :patient, 
    foreign_key: :patient_id,
    class_name: :Patient 

  belongs_to :physician,
    foreign_key: :physician_id,
    class_name: :Physician
end
