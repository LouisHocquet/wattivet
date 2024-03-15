Rails.application.routes.draw do
  root to: "pages#home", as: :root
  get "design", to: "pages#design", as: :design
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
