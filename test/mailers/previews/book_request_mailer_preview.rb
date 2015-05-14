  # Preview all emails at http://localhost:3000/rails/mailers/book_request_mailer
class BookRequestMailerPreview < ActionMailer::Preview
  def new_request_notify_holder
    book_request = BookRequest.where(:state => 0).first
    BookRequestMailer.new_request_notify_holder(book_request)
  end

  def expired_request_notify_holder
    book_request = BookRequest.where(:state => 1).first
    BookRequestMailer.expired_request_notify_holder(book_request)
  end

  def notify_reader_return_book
    book_request = BookRequest.last
    BookRequestMailer.notify_reader_return_book(book_request)
  end

  def ask_extend_request_notify_holder
    book_request = BookRequest.last
    BookRequestMailer.ask_extend_request_notify_holder(book_request)
  end

  def notify_reader_extend_book
    book_request = BookRequest.last
    BookRequestMailer.notify_reader_extend_book(book_request)
  end

  def accepted
    book_request = BookRequest.where(:state => 1).first
    BookRequestMailer.accepted(book_request)
  end

  def declined
    book_request = BookRequest.where(:state => 2).first
    BookRequestMailer.declined(book_request)
  end
end
