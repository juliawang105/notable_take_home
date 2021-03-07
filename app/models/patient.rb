# == Schema Information
#
# Table name: patients
#
#  id         :bigint           not null, primary key
#  f_name     :string           not null
#  l_name     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Patient < ApplicationRecord
end
