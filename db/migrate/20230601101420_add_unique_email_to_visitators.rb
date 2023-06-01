class AddUniqueEmailToVisitators < ActiveRecord::Migration[6.1]
  def change
    add_index :visitators, :email, unique: true
  end
end
