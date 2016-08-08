# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

vehicleX = Vehicle.create(code:"0001",serial_numnber:"100002")
vehicleY = Vehicle.create(code:"0002",serial_numnber:"100003")

VehicleLocalization.create([
  {vehicle:vehicleX,lat:17.953959,lng:-102.175619},
  {vehicle:vehicleX,lat:17.954000,lng:-102.177000},
  {vehicle:vehicleX,lat:17.958000,lng:-102.178000},
  {vehicle:vehicleX,lat:17.951000,lng:-102.179000},
  {vehicle:vehicleX,lat:17.960000,lng:-102.174000}
  ])
