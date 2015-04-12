class UserMailer < ApplicationMailer
  default from: "info@shelfless.de"
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.model_mailer.new_record_notification.subject
  #
  def new_user_notification(user)
    @record = user
    mail to: @record.email, subject: I18n.t('wellcome.title')
  end
end
