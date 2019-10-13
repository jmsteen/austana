@task_lists.each do |task_list|
  json.set! task_list.id do
    json.partial! 'task_list', task_list: task_list
  end
end