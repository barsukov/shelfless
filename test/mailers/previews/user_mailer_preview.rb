# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/new_record_notification
  def new_record_notification
    UserMailer.new_user_notification(User.first)
  end

end
