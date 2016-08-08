class AddRefersToVehicleLocalization < ActiveRecord::Migration
  def change
    add_reference :vehicle_localizations, :vehicle, index:true 
  end
end
