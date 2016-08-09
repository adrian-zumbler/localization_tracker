class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :code
  has_many :vehicle_localizations
end
