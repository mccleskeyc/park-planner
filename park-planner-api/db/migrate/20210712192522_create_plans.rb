class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.string :name
      t.string :category
      t.string :park
      t.string :land
      t.string :priority
      t.text :notes

      t.timestamps
    end
  end
end
