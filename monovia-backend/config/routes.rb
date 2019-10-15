Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :rounds, only: [:index, :create]
  resources :users
  resources :games, only: [:index, :create]
  resources :properties

end
