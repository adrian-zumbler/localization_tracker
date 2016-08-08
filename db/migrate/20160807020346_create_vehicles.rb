class CreateVehicles < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.string :code, null:false
      t.string :serial_numnber, null:false
      t.decimal :last_lng, {precision:10,scale:6}
      t.decimal :last_lat,{precision:10,scale:6}

      t.timestamps null: false
    end
  end
end
