class AddCountToVisitators < ActiveRecord::Migration[6.1]
  def change
    add_column :visitators, :count, :number
  end
end
