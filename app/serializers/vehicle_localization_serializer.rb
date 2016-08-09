class VehicleLocalizationSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng, :created_at
  has_one :vehicle
end
