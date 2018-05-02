class CreateCompanies < ActiveRecord::Migration[5.2]
  def up
    create_table :companies do |t|

      t.timestamps

      t.string :name, null: false
      t.string :industry, null: false
      t.integer :investment_lower_bound
      t.integer :investment_upper_bound
    end
  end

  def down
    drop_table :companies
  end
end
