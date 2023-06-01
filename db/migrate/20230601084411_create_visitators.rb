class CreateVisitators < ActiveRecord::Migration[6.1]
  def change
    create_table :visitators do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :major
      t.datetime :check_in

      t.timestamps
    end
  end
end
