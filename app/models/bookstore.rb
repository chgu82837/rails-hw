class Bookstore < ActiveRecord::Base
  has_many :book

  def to_s
    self.name
  end
end
