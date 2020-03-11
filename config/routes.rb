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






    resources :pins











    resource :session, only: [:create, :destroy]

    
  end
end
