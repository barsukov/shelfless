class BookSerializer < ActiveModel::Serializer
  attributes :title, :author_name, :category_name
end
