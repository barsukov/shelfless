module BookRequestHelper
  def get_request_status_button(request)
    if request.declined?
      content = I18n.t('book_request.declined')
      class_name ="btn btn-sm btn-warning disabled"
    else
      content = I18n.t('book_request.accepted')
      class_name ="btn btn-sm btn-success disabled"
    end
    content_tag(:a, content, class: class_name)
  end

  def get_request_status(request)
    if request.accepted?
      content = I18n.t('book_request.expired',days: request.expired_date.day)
      class_name ="btn btn-sm btn-info disabled"
    end
    content_tag(:a, content, class: class_name)
  end

  def get_reader_request_status_button(request)
    if request.pending?
       content_tag(:a, I18n.t('book_request.pending'), class: "btn btn-sm btn-default disabled")
    else
      get_request_status_button(request)
    end
  end
end
