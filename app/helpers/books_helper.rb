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
end
