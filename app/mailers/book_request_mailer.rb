class BookRequestMailer < ActionMailer::Base
  default from: "info@shelfless.de"

  def protect_against_forgery?
    false
  end

  def accepted(book_request)
    init_variables(book_request)
    mail to: @reader.user_email, subject: I18n.t('book_request.mail.accepted_subj')
  end

  def notify_holder(book_request)
    init_variables(book_request)
    mail to: @holder.user_email, subject: I18n.t('book_request.mail.title')
  end

  def notify_reader_return_book(book_request)
    init_variables(book_request)
    mail to: @reader.user_email, subject: I18n.t('book_request.mail.title')
  end

  def declined(book_request)
    init_variables(book_request)
    mail to: @reader.user_email, subject: I18n.t('book_request.mail.declined_subj')
  end

  private
    def init_variables(book_request)
      @holder = book_request.holder
      @reader = book_request.reader
      @book = book_request.book
      @book_request = book_request
    end
end
