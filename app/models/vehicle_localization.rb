class VehicleLocalization < ActiveRecord::Base
  default_scope { order('created_at ASC') }

  belongs_to :vehicle

  before_create :update_last_position

  private

  def update_last_position
    self.vehicle.last_lat = lat
    self.vehicle.last_lng = lng
    self.vehicle.save
  end
end
