class VehicleLocalization < ActiveRecord::Base
  default_scope { order('created_at ASC') }

  belongs_to :vehicle
end
