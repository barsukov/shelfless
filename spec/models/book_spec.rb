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
  context "validation" do
    it 'needs title' do
      expect(build(:book)).to_not be_valid
    end
  end
end
