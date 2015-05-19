FactoryGirl.define do
  factory :book_request do
    reader
    association :book, factory: :holder_book
    factory :simple_book_request do
       after(:build,:create) do |br|
         br.holder = br.book.account
       end
    end
    trait :pending_extend do
      after(:build,:create) do |br|
        br.ask_extend_book
      end
    end
    factory :pending_extend_book_request, traits: [:pending_extend]
  end
end
