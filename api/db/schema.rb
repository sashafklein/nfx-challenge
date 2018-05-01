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

ActiveRecord::Schema.define(version: 2018_05_01_193042) do

  create_table "companies", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.string "industry", null: false
    t.integer "investmentLowerBound"
    t.integer "investmentUpperBound"
  end

  create_table "fund_contacts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "fund_id", null: false
    t.integer "company_id", null: false
    t.string "name"
    t.integer "stage", default: 0
    t.integer "interest", default: 0
    t.text "whyWereInterested"
    t.text "whyTheyreInterested"
    t.string "location"
    t.integer "investedAmount"
    t.index ["company_id"], name: "index_fund_contacts_on_company_id"
    t.index ["fund_id"], name: "index_fund_contacts_on_fund_id"
  end

  create_table "funds", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.integer "size"
  end

end
