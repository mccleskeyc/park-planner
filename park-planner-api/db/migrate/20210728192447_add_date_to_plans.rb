class AddDateToPlans < ActiveRecord::Migration[6.1]
  def change
    add_column :plans, :date, :date
  end
end
