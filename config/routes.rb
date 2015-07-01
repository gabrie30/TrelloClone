TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :update, :destroy]
    resources :cards, only: [:create, :update, :destroy]

    # resources :items
    # resources :board_memberships
    # resources :card_assignments
  end
end

# == Route Map
#
#       Prefix Verb   URI Pattern               Controller#Action
#         root GET    /                         static_pages#root
#        users GET    /users(.:format)          users#index
#              POST   /users(.:format)          users#create
#     new_user GET    /users/new(.:format)      users#new
#    edit_user GET    /users/:id/edit(.:format) users#edit
#         user GET    /users/:id(.:format)      users#show
#              PATCH  /users/:id(.:format)      users#update
#              PUT    /users/:id(.:format)      users#update
#              DELETE /users/:id(.:format)      users#destroy
#      session POST   /session(.:format)        sessions#create
#  new_session GET    /session/new(.:format)    sessions#new
# edit_session GET    /session/edit(.:format)   sessions#edit
#              GET    /session(.:format)        sessions#show
#              PATCH  /session(.:format)        sessions#update
#              PUT    /session(.:format)        sessions#update
#              DELETE /session(.:format)        sessions#destroy
#   api_boards GET    /api/boards(.:format)     api/boards#index {:format=>:json}
#              POST   /api/boards(.:format)     api/boards#create {:format=>:json}
#    api_board GET    /api/boards/:id(.:format) api/boards#show {:format=>:json}
#              PATCH  /api/boards/:id(.:format) api/boards#update {:format=>:json}
#              PUT    /api/boards/:id(.:format) api/boards#update {:format=>:json}
#              DELETE /api/boards/:id(.:format) api/boards#destroy {:format=>:json}
#    api_lists POST   /api/lists(.:format)      api/lists#create {:format=>:json}
#     api_list PATCH  /api/lists/:id(.:format)  api/lists#update {:format=>:json}
#              PUT    /api/lists/:id(.:format)  api/lists#update {:format=>:json}
#              DELETE /api/lists/:id(.:format)  api/lists#destroy {:format=>:json}
#    api_cards POST   /api/cards(.:format)      api/cards#create {:format=>:json}
#     api_card PATCH  /api/cards/:id(.:format)  api/cards#update {:format=>:json}
#              PUT    /api/cards/:id(.:format)  api/cards#update {:format=>:json}
#              DELETE /api/cards/:id(.:format)  api/cards#destroy {:format=>:json}
#