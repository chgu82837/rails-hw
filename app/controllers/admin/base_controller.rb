class Admin::BaseController < ApplicationController
  layout 'admin'
  def initialize
    super
    @title = "Admin"
  end
end
