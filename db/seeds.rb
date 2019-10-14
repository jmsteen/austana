# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

users = [
    {
        name: 'John',
        email: 'john@gmail.com',
        session_token: 'JQXfzVCnu4-rCKNcvPh7-A',
        password_digest: '$2a$12$6LBHB.ZQeH/7JOK0AC5ZIedcq3ju7lt9SpEbS1Z0Ch5g/FRjD5Z6K',
    },
    {
        name: 'Kai',
        email: 'kai@kai.com',
        session_token: 'jeVQfQvTcocbAr-yXvD97Q',
        password_digest: '$2a$12$PO48gJ9Fri7LQNKiFANeO.aK.zYjyZM.XB//ZGtvop8JtmJQbbv/6',
        team_id: 2
    },
    {
        name: 'Jack',
        email: 'jack@twitter.com',
        session_token: 'seuFNvN5L5LGmZMxWztFsQ',
        password_digest: '$2a$12$n17LiFM50bgATvjgf1mtzOBGHyS2EldH/cuhP48spbZlw4z6VnqRK',
    },
    {
        name: 'Patrick',
        email: 'demo@demo.com',
        session_token: 'oJPwn9qgphYsDiBsIDUaKQ',
        password_digest: '$2a$12$NSVT1mYP1x80vAIygsmANeQx44C3Ap2OWQE6LZjqhZLNcIR3xPdR.',
        team_id: 2
    },

]

users.each do |user|
    User.create(user)
end

projects = [
    {
        name: 'Austana Beta Launch',
        current_status: 'in-progress',
        due_on: Faker::Date.forward(days: 60),
        owner_id: 4,
        team_id: 2
    },
    {
        name: 'Eastside Tech Meetup',
        current_status: 'Planning',
        due_on: Faker::Date.forward(days: 60),
        owner_id: 1,
    },
]

projects.each do |project|
    Project.create(project)
end


teams = [
    {
        name: 'Engineering',
        description: 'Responsible for web development and architecture'
    },
    {
        name: 'Marketing',
        description: 'User-focused digital marketing and product feedback loop'
    },
]

teams.each do |team|
    Team.create(team)
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
]

task_lists.each do |task_list|
    TaskList.create(task_list)
end


20.times do
    Task.create(
        due_on: Faker::Date.forward(days: 60),
        name: Faker::Company.bs,
        assignee_id: Faker::Number.between(from: 1, to: 4),
        project_id: Faker::Number.between(from: 1, to: 2),
        task_list_id: Faker::Number.between(from: 1, to: 8),
    )
end
