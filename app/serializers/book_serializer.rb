class BookSerializer < ActiveModel::Serializer
  attributes :title, :author_name, :category_name, :account_city, :language
end
