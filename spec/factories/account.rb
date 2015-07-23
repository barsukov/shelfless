FactoryGirl.define do
  factory :account do
    city "Berlin"
    name "Muster"
    surname "Man"
    trait :holder do
      name "Peter Till"
       before(:build,:create) do |account|
         account.books << create_list(:simple_book, 3, account: account)
      end
    end

    trait :simple_account do
      name "Adri"
    end
    factory :holder, traits: [:holder]
    factory :reader, traits: [:simple_account]

  end
end
