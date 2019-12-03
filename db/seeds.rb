# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Team.destroy_all
TaskList.destroy_all
Task.destroy_all
Project.destroy_all

require 'faker'


users = [
    {
        name: 'John Steen',
        email: 'john@gmail.com',
        session_token: 'JQXfzVCnu4-rCKNcvPh7-A',
        password_digest: '$2a$12$6LBHB.ZQeH/7JOK0AC5ZIedcq3ju7lt9SpEbS1Z0Ch5g/FRjD5Z6K',
    },
    {
        name: 'Kai',
        email: 'kai@kai.com',
        session_token: 'jeVQfQvTcocbAr-yXvD97Q',
        password_digest: '$2a$12$PO48gJ9Fri7LQNKiFANeO.aK.zYjyZM.XB//ZGtvop8JtmJQbbv/6',
    },
    {
        name: 'Jack',
        email: 'jack@twitter.com',
        session_token: 'seuFNvN5L5LGmZMxWztFsQ',
        password_digest: '$2a$12$n17LiFM50bgATvjgf1mtzOBGHyS2EldH/cuhP48spbZlw4z6VnqRK',
    },
    {
        name: 'Guest User',
        email: 'demo@demo.com',
        session_token: 'oJPwn9qgphYsDiBsIDUaKQ',
        password_digest: '$2a$12$NSVT1mYP1x80vAIygsmANeQx44C3Ap2OWQE6LZjqhZLNcIR3xPdR.',
    },

]

User.create(users[0])
User.create(users[1])
User.create(users[2])
demo_user = User.create(users[3])

teams = [
    {
        name: 'Engineering',
        description: 'Responsible for web development and architecture',
        members: [{name: "Guest User", email: "demo@demo.com"}]
    },
    {
        name: 'Marketing',
        description: 'User-focused digital marketing and product feedback loop'
    },
]

engineering_team = Team.create(teams[0])
marketing_team = Team.create(teams[1])

demo_user.teams << engineering_team

projects = [
    {
        name: 'Austana Beta Launch',
        current_status: 'in-progress',
        due_on: Faker::Date.forward(days: 60),
        owner_id: 4,
        team_id: 1
    },
    {
        name: 'Eastside Tech Meetup',
        current_status: 'Planning',
        due_on: Faker::Date.forward(days: 60),
        owner_id: 3,
        team_id: 2
    },
    {
        name: 'Asana Clone',
        current_status: 'in-progress',
        due_on: Faker::Date.forward(days: 60),
        owner_id: 1,
        team_id: 1
    },
]

projects.each do |project|
    Project.create(project)
end

task_lists = [
    {
        name: 'Discovery and Planning',
        owner_id: 1,
        project_id: 2,
    },
    {
        name: 'Development',
        owner_id: 1,
        project_id: 2,
    },
    {
        name: 'Testing',
        owner_id: 1,
        project_id: 2,
    },
    {
        name: 'Deployment',
        owner_id: 1,
        project_id: 2,
    },
    {
        name: 'Discovery and Planning',
        owner_id: 4,
        project_id: 1,
    },
    {
        name: 'Development',
        owner_id: 4,
        project_id: 1,
    },
    {
        name: 'Testing',
        owner_id: 4,
        project_id: 1,
    },
    {
        name: 'Deployment',
        owner_id: 4,
        project_id: 1,
    },
    {
        name: 'Discovery and Planning',
        owner_id: 1,
        project_id: 3,
    },
    {
        name: 'Development',
        owner_id: 1,
        project_id: 3,
    },
    {
        name: 'Testing',
        owner_id: 1,
        project_id: 3,
    },
    {
        name: 'Deployment',
        owner_id: 1,
        project_id: 3,
    },
]

task_lists.each do |task_list|
    TaskList.create(task_list)
end

Task.create(
    due_on: Date.today + 3,
    name: 'Edit your first project',
    assignee_id: 4,
    project_id: 1,
    task_list_id: 8,
)

Task.create(
    due_on: Date.today + 5,
    name: 'Check out your Team overview',
    assignee_id: 4,
    project_id: 1,
    task_list_id: 6,
)
