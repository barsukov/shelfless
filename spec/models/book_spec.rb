require 'rails_helper'

RSpec.describe Book, type: :model do
  context "simple constructor" do
    let(:book) { create(:simple_author).books.first}
    it "has a good title" do
      expect(book.title).to eq("simple book")
    end
    it "has a nice author" do
      expect(book.author.name).to eq("Peter Till")
    end
  end
end
