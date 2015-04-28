module BooksHelper
  def get_boolean_icon(value)
    if value
      content = "✓"
      label = "label label-success"
    else
      content = "✘"
      label = "label label-danger"
    end
    content_tag(:span, content, class: label)
  end

  def get_status_button(book)
    get_request_button(book,"btn btn-sm")
  end

  def get_request_button(book, basic_icon_class="btn btn-sm btn-block")
    if user_signed_in?
      path = new_account_reader_book_request_path(current_user.account.id, book_id: book.id)
      if book.account == current_user.account
        name = I18n.t('books.your_book_btn')
        basic_icon_class += " btn-default disabled"
      elsif book.unshared?
        name = I18n.t('books.unavailable_btn')
        basic_icon_class += " btn-warning disabled"
      else
        basic_icon_class += " btn-info"
        name = I18n.t('books.request_btn')
      end
    else
      basic_icon_class += " btn-default"
      name = I18n.t('login_please')
      path = new_user_session_path
    end
    link_to name, path , {role: "button", class: basic_icon_class}
  end
end
