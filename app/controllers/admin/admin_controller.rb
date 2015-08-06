class Admin::AdminController < Admin::BaseController
  def index
    @users = User.all
    @new_user = User.new
  end

end
