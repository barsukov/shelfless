FactoryGirl.define do
  factory :category do
    name "Business"
    trait :simple_category do
      name "Fiction"
       before(:build,:create) do |category|
        category.books << create_list(:simple_book, 3, category: category)
      end
    end

    factory :simple_category, traits: [:simple_category]

  end
end
