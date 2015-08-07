module BookRequestHolderHelper
  include  Concerns::BookRequestBase

  def get_ask_return_button(request)
    if request.initial_extension? || request.returned_now?
      path = return_now_account_holder_book_requests_path(request.holder.id, book_id: request.book.id, id: request.id)
      text = I18n.t('book_request.ask_return')
      class_name = "btn-primary"
      get_link(text, path, class_name)
    elsif request.pending_extension?
      path = decline_extension_account_holder_book_requests_path(request.holder.id, book_id: request.book.id, id: request.id)
      text = I18n.t('book_request.decline_extension')
      class_name = "btn-warning"
      get_link(text, path, class_name)
    end
  end

  def makes_book_returned_button(request)
    path = mark_returned_account_holder_book_requests_path(request.holder.id, book_id: request.book.id, id: request.id)
    get_link(I18n.t('book_request.already_returned'), path, "btn-info")
  end

  def get_extend_button(request)
    if request.pending_extension?
      path = extend_account_holder_book_requests_path(request.holder.id, book_id: request.book.id, id: request.id)
      get_link(I18n.t('book_request.extend'), path, "btn-success")
    end
  end

  def get_holder_request_status(request)
    button_icon = "btn btn-sm btn-block disabled "
    if request.pending?
      button_icon += "btn-default"
      content_tag(:a, I18n.t('book_request.pending'), class: button_icon)
    elsif request.accepted?
      get_info_expired_button(request)
    elsif request.declined?
      button_icon += "btn-warning"
      content_tag(:a, I18n.t('book_request.declined'), class: button_icon)
    elsif request.canceled?
      button_icon += "btn-warning"
      content_tag(:a, I18n.t('book_request.canceled'), class: button_icon)
    else
      button_icon += "btn-success"
      content_tag(:a, I18n.t('book_request.mail.returned'), class:  button_icon)
    end
  end

  def get_holder_request_control(request)
    if request.accepted?
      content_tag(:div, :class => 'btn-group', role: "group") do
        @content = makes_book_returned_button(request)
        @content << get_extend_button(request)
        @content << get_ask_return_button(request)
      end
    end
  end
end
