require 'sidekiq/web'
Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks",
    confirmations: 'users/confirmations', registrations: 'users/registrations',
    passwords: 'users/passwords'}

  resources :books, only: [:index, :show ,:create] do
    collection do
      match 'search' => 'books#search', via: [:get, :post], as: :search
    end
  end

  resources :categories, only: [:index]
  resources :authors, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index], format: :json
      resources :accounts do
        scope module: :accounts do
          resources :reader_book_requests, only: [:create], format: :json
        end
      end
    end
  end

  resources :accounts do
    scope module: :accounts do
       resources :books
       resources :reader_book_requests do
         collection do
           get 'ask_extend'
           get 'cancel'
         end
       end
       resources :holder_book_requests do
          collection do
            get 'accept'
            get 'return_now'
            get 'decline_extension'
            get 'mark_returned'
            get 'extend'
            get 'decline'
          end
       end
    end
  end

  root "main#index"
  get "/new_interface", to: 'single_page_application#index'
  get "/books_list", to: 'new_books#index'
  get '/about', :to => 'main#about'
  get '/privacy', :to => 'main#privacy'
  authenticate :user, lambda { |u| u.role == :admin } do
    mount Sidekiq::Web => '/sidekiq'
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
