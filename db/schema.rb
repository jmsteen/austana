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

ActiveRecord::Schema.define(version: 2019_10_14_152538) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.string "name", null: false
    t.text "current_status", default: "created", null: false
    t.datetime "due_on", null: false
    t.datetime "start_on", default: "2019-10-09 19:38:15"
    t.boolean "archived", default: false
    t.string "color", default: "#f49931"
    t.text "notes"
    t.integer "owner_id", null: false
    t.integer "team_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_projects_on_owner_id"
    t.index ["team_id"], name: "index_projects_on_team_id"
  end

  create_table "task_lists", force: :cascade do |t|
    t.string "name", null: false
    t.integer "owner_id", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_task_lists_on_owner_id"
    t.index ["project_id"], name: "index_task_lists_on_project_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.boolean "completed", default: false, null: false
    t.datetime "completed_at"
    t.date "due_on"
    t.datetime "due_at"
    t.string "name", null: false
    t.text "notes"
    t.date "start_on", default: "2019-10-09"
    t.integer "assignee_id", null: false
    t.integer "parent_task_id"
    t.integer "project_id", null: false
    t.integer "task_list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assignee_id"], name: "index_tasks_on_assignee_id"
    t.index ["parent_task_id"], name: "index_tasks_on_parent_task_id"
    t.index ["project_id"], name: "index_tasks_on_project_id"
    t.index ["task_list_id"], name: "index_tasks_on_task_list_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
