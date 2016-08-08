class VehicleLocalization < ActiveRecord::Migration
  def change
    create_table :vehicle_localizations do |t|
      t.decimal :lat, {precision:10,scale:6,null:false}
      t.decimal :lng, {precision:10,scale:6,null:false}
      t.belongs_to :vehicle, null:false

      t.timestamps null: false
    end
  end
end
