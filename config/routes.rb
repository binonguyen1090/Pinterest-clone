Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do




    resources :users do
      resources :pins, only: [:index]
      resources :boards, only: [:index]
      get "followers", on: :collection
      get "followees", on: :collection
    end





    resources :boards do 
      resources :pins, only: [:index]
    end 






    resources :pins
    resource :follows, only: [:create, :destroy]











    resource :session, only: [:create, :destroy]

    get "/boards/:boardId/:pinId", to: "boards#move"
  end
end
