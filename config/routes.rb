Rails.application.routes.draw do
  root to: "static_pages#root"


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :pins, only: [:index]
      resources :boards, only: [:index]
    end

    resources :boards do 
      resources :pins, only: [:index]
    end 

    resources :pins, except: [:create]

    resource :session, only: [:create, :destroy]

    
  end
end
