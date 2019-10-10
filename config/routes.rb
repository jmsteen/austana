Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      resources :projects, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:show, :create, :index, :update, :destroy]
    resources :task_lists, only: 
      [:index, :show, :create, :update, :destroy] do
        resources :tasks, only: [:index, :create]
    end
    resources :tasks, only: [:update, :destroy, :show]
    resources :teams, only: [:create, :show, :update]
  end
end
