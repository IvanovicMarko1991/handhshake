Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :students
      resources :visitators
      get '/index', to: 'students#new', as: 'index'
      get '/new', to: 'students#new', as: 'new'
      get '/check-in-kiosk', to: 'visitators#new', as: 'check-in-kiosk'
      # get '/visitators', to: 'visitators#index', as: 'visitator'
    end
  end
end
