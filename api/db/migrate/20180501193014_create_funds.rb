class CreateFunds < ActiveRecord::Migration[5.2]
  def change
    create_table :funds do |t|

      t.timestamps

      t.string :name
      t.integer :size
    end
  end
end
