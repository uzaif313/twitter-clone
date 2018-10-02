Rails.application.routes.draw do
  get 'profile'=>'profile#index'
  patch 'profile'=>'profile#update'
  resources :tweets
  devise_for :users
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
