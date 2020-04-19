Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do

    resources :users do
      resources :pins, only: [:index]
      resources :boards, only: [:index]
    end


    resources :boards do 
      resources :pins, only: [:index]
    end 

    resources :pins do 
      resources :likes, only: [:index]
    end
    resources :follows, only: [:create, :index]
    resources :likes, only: [:create]
    delete "/follows", to: "follows#destroy"
    delete "/likes", to: "likes#destroy"
    resource :session, only: [:create, :destroy]

    get "/boards/:boardId/:pinId", to: "boards#move"
  end
end
