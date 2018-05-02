class CreateFundContacts < ActiveRecord::Migration[5.2]
  def up
    create_table :fund_contacts do |t|

      t.timestamps
      t.integer :fund_id, null: false, index: true
      t.integer :company_id, null: false, index: true
      t.string :name
      t.integer :stage, default: 0
      t.integer :interest, default: 0
      t.text :why_were_interested
      t.text :why_theyre_interested
      t.string :location
      t.integer :invested_amount
    end
  end

  def down
    drop_table :fund_contacts
  end
end
