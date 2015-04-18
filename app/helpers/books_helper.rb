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

  def get_request_label(book)
    classess = "btn-sm"
    if book.unshared?
      button_tag "Unavailable",:disabled => true, class: "btn btn-default"
    else
      classess += " btn-info"
      link_to I18n.t('books.request_btn'), new_account_reader_book_request_path(current_user.account.id, book_id: book.id),
       {role: "button", class: classess}
    end

  end
end
