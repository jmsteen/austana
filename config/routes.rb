Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      resources :projects, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:show, :index, :update, :destroy, :edit]
    
  end
end
