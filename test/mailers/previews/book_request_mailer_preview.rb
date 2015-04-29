  # Preview all emails at http://localhost:3000/rails/mailers/book_request_mailer
class BookRequestMailerPreview < ActionMailer::Preview
  def notify_holder
    book_request = BookRequest.where(:state => 0).first
    BookRequestMailer.notify_holder(book_request)
  end

  def notify_reader_return_book
    book_request = BookRequest.where(:state => 0).first
    BookRequestMailer.notify_reader_return_book(book_request)
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
