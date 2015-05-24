module Concerns::BookRequestBase
  extend ActiveSupport::Concern
  included do

    def get_link(name, path, icon_class)
      class_name = "btn btn-sm " + icon_class
      link_to(name, path , class: class_name, data: {role: "button"})
    end

    def get_info_expired_button(request)
      if request.days_to_return > 0
        content = I18n.t('book_request.not_expired', days: request.days_to_return)
        class_name ="btn btn-sm btn-block btn-info disabled"
      else
        content = I18n.t('book_request.expired', days: request.days_to_return.abs)
        class_name ="btn btn-sm btn-block btn-warning disabled"
      end
      content_tag(:span, content, class: class_name)
    end

  end
end
