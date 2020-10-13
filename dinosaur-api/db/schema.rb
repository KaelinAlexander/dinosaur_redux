# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_12_181657) do

  create_table "dinosaurs", force: :cascade do |t|
    t.string "genus"
    t.string "grouping"
    t.string "meaning"
    t.string "type_species"
    t.integer "discovery_year"
    t.string "discovery_person"
    t.float "size"
    t.string "period"
    t.string "distribution"
    t.text "description"
  end

end
