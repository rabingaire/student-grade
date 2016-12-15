Rails.application.routes.draw do
  root "students#index"
  resources :students, only: [:create] do
    resources :subjects, only: [:create]
  end
end
