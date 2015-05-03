module AccountKeeper
  extend ActiveSupport::Concern
  included do
    include BasicAccountKeeper
    before_action { set_account params[:account_id] }
  end
end
