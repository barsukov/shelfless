  # Preview all emails at http://localhost:3000/rails/mailers/book_request_mailer
class BookRequestMailerPreview < ActionMailer::Preview
  def notify_holder
    book_request = BookRequest.where(:state => 0).first
    BookRequestMailer.notify_holder(book_request)
  end
end
