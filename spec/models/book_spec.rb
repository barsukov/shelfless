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
  end
  context "validation" do
    it 'needs postcode' do
      expect(build(:book, :title => "")).to_not be_valid
    end
    it 'needs title' do
      expect(build(:book, :postcode => 1234)).to_not be_valid
    end
  end
end
