class Visitator < ApplicationRecord

  before_save :set_date_time

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.edu\z/i, message: "must be a valid .edu email address" }
  validates :major, presence: true

  private

  def set_date_time
    self.check_in = DateTime.now
  end

  def set_count
    self.count += 1
  end
end
