require 'rails_helper'

describe Book, type: :model do
  context "simple constructor" do
    let(:book) { create(:simple_author).books.first}
    it "has a good title" do
      expect(book.title).to eq("simple book")
    end
    it "has a nice author" do
      expect(book.author.name).to eq("Peter Till")
    end
    it "has a nice deutch language" do
      expect(book.language).to eq("DE")
    end
  end

  describe "#search_book" do
    let!(:author) { create(:simple_author) }
    let!(:category) { create(:simple_category) }
    let!(:holder) { create(:holder) }

    it "searches book by author name" do
      searched_book = Book.search_book("Peter Till").first
      expect(searched_book.author.name).to eq("Peter Till")
    end

    it "searches book by category name" do
      searched_book = Book.search_book("Fiction").first
      expect(searched_book.category_name).to eq("Fiction")
    end

    it "searches book by city" do
      searched_book = Book.search_book("Berlin").first
      expect(searched_book.account_city).to eq("Berlin")
    end

    it "searches book by title" do
      searched_book = Book.search_book("simple book").first
      expect(searched_book.title).to eq("simple book")
    end
  end

  context "validation" do
    it 'needs title' do
      expect(build(:book)).to_not be_valid
    end
  end
end
