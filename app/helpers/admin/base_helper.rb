module Admin::BaseHelper
  def r_user_inline(u)
    render "admin/users/inline",u:u
  end
  def r_user_form(u)
    render "admin/users/form",u:u
  end
end
