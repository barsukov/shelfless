class BookRequestMailer < ActionMailer::Base
  default from: "info@shelfless.de"

  def protect_against_forgery?
    false
  end

  def accepted(request)

  end

  def notify_holder(book_request)
    @holder = book_request.holder
    @reader = book_request.reader
    @book = book_request.book
    @book_request = book_request
    mail to: @holder.user_email, subject: I18n.t('book_request.mail.title')
  end

  def declined(request)

  end

end
