class CreateDinosaurs < ActiveRecord::Migration[6.0]
  def change
    create_table :dinosaurs do |t|
      t.string :genus
      t.string :grouping
      t.string :meaning
      t.string :type_species
      t.integer :discovery_year
      t.string :discovery_person
      t.float :size
      t.string :period
      t.string :start_stage
      t.string :end_stage
      t.string :distribution
      t.text :description

      t.timestamps
    end
  end
end
