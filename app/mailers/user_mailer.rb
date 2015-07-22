class UserMailer < Devise::Mailer
  default from: "info@shelfless.io"
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.model_mailer.new_record_notification.subject
  #

  def confirmation_instructions(record, token, opts={})
    @record = record
    @token = token
    mail to: @record.email, subject: I18n.t('wellcome.title')
  end

end
