class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|

      t.timestamps

      t.string :name, null: false
      t.string :industry, null: false
      t.integer :investmentLowerBound
      t.integer :investmentUpperBound
    end
  end
end
