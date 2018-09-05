Rails.application.routes.draw do
  resources :exercise_sets
  resources :exercises
  resources :sessions
  resources :users
  resources :workouts
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
