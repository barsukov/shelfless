module BookRequestReaderHelper
  include Concerns::BookRequestBase
 
  def get_request_extension_controls(request)
    if request.initial_extension? || request.extended?
      if request.days_to_return <= 1 
        content = get_ask_extend_button(request) 
      else
        content = get_info_expired_button(request)
      end
    else
      content = get_extension_status(request)
    end
    content
  end

  def basic_icon_class
    "btn btn-sm btn-block disabled "
  end

  def get_extension_status(request)
    if request.pending_extension?
      content = I18n.t('book_request.pending_extension', days: request.days_to_return)
      class_name = basic_icon_class + "btn-default"
    elsif request.return_now?
      content = I18n.t('book_request.decline_extension', days: request.days_to_return.abs)
      class_name = basic_icon_class + "btn-warning"
    end
    content_tag(:span, content, class: class_name)
  end
  
  def get_ask_extend_button(request)
    class_name = "btn btn-sm btn-block btn-success"
    path = ask_extend_account_reader_book_requests_path(request.reader.id, book_id: request.book.id, id: request.id)
    get_link(I18n.t('book_request.ask_extend'), path, class_name)
  end

  def get_reader_request_status_button(request)
    if request.pending?
       class_name = basic_icon_class + "btn-default"
       content_tag(:span, I18n.t('book_request.pending'), class: class_name)
    elsif request.declined?
       class_name = basic_icon_class + "btn-warning"
       content_tag(:span, I18n.t('book_request.declined'), class: class_name)
    else
      get_request_extension_controls(request)
    end
  end
end
