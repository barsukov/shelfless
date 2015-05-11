class BookRequestMailer < ActionMailer::Base
  default from: "info@shelfless.de"

  def accepted(book_request)
    init_variables(book_request)
    mail to: @reader.user_email, subject: I18n.t('book_request.mail.accepted_subj')
  end

  def new_request_notify_holder(book_request)
    init_variables(book_request)
    mail to: @holder.user_email, subject: I18n.t('book_request.mail.title')
  end

  def expired_request_notify_holder(book_request)
    init_variables(book_request)
    mail to: @holder.user_email, subject: I18n.t('book_request.mail.expired_subj')
  end

  def ask_extend_request_notify_holder(book_request)
    init_variables(book_request)
    mail to: @holder.user_email, subject: I18n.t('book_request.mail.ask_extend_subj')
  end

  def notify_reader_return_book(book_request)
    init_variables(book_request)
    mail to: @reader.user_email, subject: I18n.t('book_request.mail.title')
  end

  def notify_reader_extend_book(book_request)
    init_variables(book_request)
    mail to: @reader.user_email, subject: I18n.t('book_request.mail.extend_book_subj')
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
