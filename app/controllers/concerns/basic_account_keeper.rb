module BasicAccountKeeper
  extend ActiveSupport::Concern
  included do
    # Use callbacks to share common setup or constraints between actions.
    private
      def set_account(id)
        authenticate_user!
        if current_user.account_id == id.to_i
          @account = Account.find(id)
        else
          redirect_to root_url, flash: {:error => I18n.t("notice.restricted")}
        end
      end
  end
end
