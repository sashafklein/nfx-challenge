class CreateFundContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :fund_contacts do |t|

      t.timestamps
      t.integer :fund_id, null: false, index: true
      t.integer :company_id, null: false, index: true
      t.string :name
      t.integer :stage, default: 0
      t.integer :interest, default: 0
      t.text :whyWereInterested
      t.text :whyTheyreInterested
      t.string :location
      t.integer :investedAmount
    end
  end
end
