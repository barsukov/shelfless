require 'rails_helper'

describe Account, type: :model do
  let(:account) { create(:reader)}

  describe "#city" do
    it "lives in berlin" do
      expect(account.city).to eq("Berlin")
    end

    it { expect(Account).not_to respond_to :postcode }

    it "lives in berlin" do
      expect(account.city).to eq("Berlin")
    end

    context "relocates to Munich" do
      it "lives in munich" do
        city = CityFinder.get_city "munich"
        account.city = city
        account.save
        expect(account.reload.city).to eq("Munich")
      end
    end
  end
end
