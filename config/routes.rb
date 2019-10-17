Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] do
      resources :projects, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:show, :create, :index, :update, :destroy]
    resources :task_lists, only: 
      [:index, :show, :create, :update, :destroy]
    resources :tasks, only: [:create, :index, :update, :destroy, :show]
    resources :teams, only: [:create, :show, :index, :update] do
      resources :users, only: :index
    end
  end
end
