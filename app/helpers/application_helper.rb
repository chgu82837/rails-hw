module ApplicationHelper
  def js(*files)
    content_for(:js) { javascript_include_tag(*files) }
  end
  def css(*files)
    content_for(:css) { stylesheet_link_tag(*files) }
  end
end
