Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:show, :index, :create, :update, :destroy] do
      resources :task_lists, only: :index
    end
    resources :task_lists, only: 
      [:show, :create, :update, :destroy]
    resources :tasks, only: [:create, :index, :update, :destroy, :show]
    resources :teams, only: [:create, :show, :index, :update] do
      resources :users, only: [:index, :create]
    end
  end
end
