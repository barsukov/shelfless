module AccountParams
  extend ActiveSupport::Concern
  included do
    before_action :set_account
    # Use callbacks to share common setup or constraints between actions.
    private
     # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:account_id])
    end
  end
end
