FactoryGirl.define do
  factory :book do
    language "DE"
    trait :simple_book do
      author
      title "simple book"
    end
    trait :holder_book do
       before(:build,:create) do |book|
         create(:reader, books: [book])
       end
    end
    factory :simple_book, traits: [:simple_book]
    factory :holder_book, traits: [:simple_book, :holder_book]

  end
end
