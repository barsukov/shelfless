FactoryGirl.define do
  factory :book do
    trait :simple_book do
      author
      title "simple book"
    end

    factory :simple_book, traits: [:simple_book]

  end
end
