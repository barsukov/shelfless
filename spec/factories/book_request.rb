FactoryGirl.define do
  factory :book_request do
    reader
    association :book, factory: :holder_book
    factory :simple_book_request do
       after(:build,:create) do |br|
         br.holder = br.book.account
       end
    end
  end
end
