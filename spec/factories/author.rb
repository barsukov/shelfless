FactoryGirl.define do
  factory :author do
    trait :simple_author do
      name "Peter Till"
       before(:build,:create) do |author|
        author.books << create_list(:simple_book, 3, author: author)
      end
    end

    factory :simple_author, traits: [:simple_author]

  end
end
