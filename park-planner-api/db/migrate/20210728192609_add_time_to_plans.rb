class AddTimeToPlans < ActiveRecord::Migration[6.1]
  def change
    add_column :plans, :time, :time
  end
end
