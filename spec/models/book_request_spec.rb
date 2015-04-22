require 'rails_helper'

describe BookRequest, type: :model do
  it "creates simple request" do
    request = build(:simple_book_request)
    expect(request.save).to be(true)
    expect(request.book).to_not be_nil
    expect(request.holder).to_not be_nil
    expect(request.reader).to_not be_nil
  end

  context 'request processing' do
    context "accept request" do
      let(:request) { create(:simple_book_request) }

      it "changes state of the book to unavailable for request" do
        request.accept!
        expect(request.book.unshared?).to be(true)
      end
      it "starts returner timer" do
        pending
      end
      it "sends accepted notification" do
        pending
      end
    end
    context "decline request" do
      it "keeps old state of the book" do
        pending
      end
      it "sends decline notification to user" do
        pending
      end
    end
  end
end
