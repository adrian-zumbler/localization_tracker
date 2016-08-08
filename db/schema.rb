# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160808171657) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "vehicle_localizations", force: :cascade do |t|
    t.decimal  "lat",        precision: 10, scale: 6, null: false
    t.decimal  "lng",        precision: 10, scale: 6, null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "vehicle_id"
  end

  add_index "vehicle_localizations", ["vehicle_id"], name: "index_vehicle_localizations_on_vehicle_id", using: :btree

  create_table "vehicles", force: :cascade do |t|
    t.string   "code",                                    null: false
    t.string   "serial_numnber",                          null: false
    t.decimal  "last_lng",       precision: 10, scale: 6
    t.decimal  "last_lat",       precision: 10, scale: 6
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
  end

end
