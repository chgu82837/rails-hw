class Book < ActiveRecord::Base
  belongs_to :author
  belongs_to :bookstore

  def to_s
    self.title
  end
end
