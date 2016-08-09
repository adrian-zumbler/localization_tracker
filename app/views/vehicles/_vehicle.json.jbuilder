json.extract! vehicle, :id,:code,:vehicle_localizations,:last_lng,:last_lat, :created_at, :updated_at
json.url vehicle_url(vehicle, format: :json)
