require 'rails_helper'

describe BookRequest, type: :model do
  it "creates simple request" do
    request = build(:simple_book_request)
    expect(request.save).to be(true)
    expect(request.book).to_not be_nil
    expect(request.holder).to_not be_nil
    expect(request.reader).to_not be_nil
  end
  describe "#extension_state" do
    let(:request) { create(:simple_book_request) }
    let(:mailer) { double("mailer", :deliver => true) }

    context "ask_extend book" do
      it "notifies hodler" do
        mailer.stub(:new_request_notify_holder)
        expect(mailer).to receive(:ask_extend_request_notify_holder)
        expect(BookRequestMailer).to receive(:delay).at_most(:twice).and_return(mailer)
        request.ask_extend_book
        expect(request.pending_extension?).to be(true)
      end
    end

    it "accept extension book" do

    end

    it "decline extension book" do

    end

  end
  context 'request processing' do
    let(:request) { create(:simple_book_request) }
    let(:mailer) { double("mailer", :deliver => true) }
    context "incoming request" do
      it "notifies hodler" do
        expect(mailer).to receive(:new_request_notify_holder)
        expect(BookRequestMailer).to receive(:delay).and_return(mailer)
        request
      end
    end
    context "accept request" do
      let(:mailer) { double("mailer", :deliver => true) }
      let(:second_request) { create(:simple_book_request, book: request.book) }

      before(:each) do
        mailer.stub(:new_request_notify_holder)
      end

      it "declines every pending request to this books" do
        expect(second_request.declined?).to eq(false)
        request.accept!
        expect(request.accepted?).to eq(true)
        expect(second_request.reload.declined?).to eq(true)
      end

      it "changes state of the book to unavailable for request" do
        request.accept!
        expect(request.book.unshared?).to be(true)
      end
      it "starts returner timer" do
        expect(mailer).to receive(:expired_request_notify_holder)
        time = Settings.return_time
        expect(BookRequestMailer).to receive(:delay_until).with(time).and_return(mailer)
        request.accept!
      end
      it "sends accepted notification" do
        expect(mailer).to receive(:accepted)
        expect(BookRequestMailer).to receive(:delay).at_most(:twice).and_return(mailer)
        request.accept!
      end
    end
    context "decline request" do
      before(:each) do
        mailer.stub(:new_request_notify_holder)
      end
      it "keeps old state of the book" do
        request.decline!
        expect(request.book.unshared?).to be(false)
      end
      it "sends decline notification to user" do
        expect(mailer).to receive(:declined)
        expect(BookRequestMailer).to receive(:delay).at_most(:twice).and_return(mailer)
        request.decline!
      end
    end
  end
end
