# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Plan.create(name: "", category: "", park: "", land: "", priority: "", notes:"")
plans = Plan.create([
    {name: "Coral Reef", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "Future World", 
    priority: "Must", 
    notes:"Reservation for 2 - 8/19 @ 4:45pm", 
    date: "2021-08-19",
    time: "16:45"}

])