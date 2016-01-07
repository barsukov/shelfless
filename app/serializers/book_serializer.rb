class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author_name, :category_name, :account_city, :language
end
