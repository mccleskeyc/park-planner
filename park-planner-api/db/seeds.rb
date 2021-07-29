# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' },, { name: 'Lord of the Rings' },])
#   Character.create(name: 'Luke', movie: movies.first)

# Plan.create(name: "", category: "", park: "", land: "", priority: "", notes:"")
plans = Plan.create([

# Epcot / Thursday

    {name: "Coral Reef", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "Future World", 
    priority: "Must", 
    notes:"Reservation for 2 - 8/19 @ 4:45pm"},

    {name: "Fireworks - Epcot Forever", 

    category: "None/Other", 
    park: "Epcot", land: "None/Other", 
    priority: "Must", 
    notes:"Fireworks show @ 9pm on 8/19 - can be done from anywhere, but thinking about getting gelato and watching from Italy"},    

# Magic Kingdom / Friday
    {name: "Space Mountain", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Tomorrowland", 
    priority: "Must", 
    notes:"Rope Drop / Michael only"},

    {name: "Buzz Lightyear's Space Ranger Spin", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Tomorrowland", 
    priority: "Must", 
    notes:"Immediately after Michael does Space Mountain"},

    {name: "Monsters Inc. Laugh Factory", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Tomorrowland", 
    priority: "Must", 
    notes:"After Buzz Lightyear"},

    {name: "Tomorrowland Speedway", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Tomorrowland", 
    priority: "Medium", 
    notes:"After Monsters Inc. if the line isn't long"},

    {name: "Dole Whip", 

    category: "Food - Item", 
    park: "Magic Kingdom", land: "Tomorrowland", 
    priority: "Must", 
    notes:"Aloha Aisle, mobile orders accepted"},

    {name: "Jungle Cruise", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Adventureland", 
    priority: "Must", 
    notes:"Head over to adventureland after wrapping up Tomorrowland"},

    {name: "Pirates of the Carribbean", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Advenutureland", 
    priority: "Must", 
    notes:""},

    {name: "Enchanted Tiki Room", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Tomorrowland", 
    priority: "Low", 
    notes:""},

    {name: "Haunted Mansion", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Liberty Square", 
    priority: "Must", 
    notes:""},

    {name: "Turkey Leg", 

    category: "Food - Item", 
    park: "Magic Kingdom", land: "Liberty Square", 
    priority: "High", 
    notes:"Liberty Square Market"},

    {name: "Sleepy Hollow", 

    category: "Food - Restaurant/Stall", 
    park: "Magic Kingdom", land: "Liberty Square", 
    priority: "High", 
    notes:"Mickey Waffle if before 11, Turkey Leg if after"},

    {name: "Cheshire Cafe", 

    category: "Food - Restaurant/Stall", 
    park: "Magic Kingdom", land: "Fantasyland", 
    priority: "Low", 
    notes:"Cheshire Cat Tail and/or Curiouser and Curiouser Slushy"},

    {name: "Dumbo", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Fantasyland", 
    priority: "Medium", 
    notes:""},

    {name: "Mad Tea Party", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Fantasyland", 
    priority: "Must", 
    notes:""},

    {name: "Gaston's Tavern", 

    category: "Food - Restaurant/Stall", 
    park: "Magic Kingdom", land: "Fantasyland", 
    priority: "High", 
    notes:"Grey Stuff Cupcake and LeFou's Brew"},

    {name: "The Many Adventures of Winnie the Pooh", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Fantasyland", 
    priority: "Low", 
    notes:""},

    {name: "Mickey's Philharmagic", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Fantasyland", 
    priority: "Must", 
    notes:""},

    {name: "Peter Pan's Flight", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Fantasyland", 
    priority: "High", 
    notes:""},

    {name: "Under the Sea", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Fantasy Land", 
    priority: "Low", 
    notes:""},

    {name: "Small World", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Fantasyland", 
    priority: "Must", 
    notes:""},

    {name: "Casey's Corner", 

    category: "Food - Restaurant/Stall", 
    park: "Magic Kingdom", land: "Main Street", 
    priority: "Low", 
    notes:""},

    {name: "Plaza Restaurant", 

    category: "Food - Restaurant/Stall", 
    park: "Magic Kingdom", land: "Main Street", 
    priority: "Must", 
    notes:"Reservation for 2 - 8/20 @ 4:55pm"},

    {name: "Fireworks - Happily Ever After", 

    category: "None/Other", 
    park: "Magic Kingdom", land: "None/Other", 
    priority: "Must", 
    notes:"8:45pm - can be done from anywhere"},

# Studios / Saturday

    {name: "Olivia's Cafe Brunch", 

    category: "Food - Restaurant/Stall", 
    park: "Resorts", land: "None/Other", 
    priority: "Medium", 
    notes:"Reservation for 2 - 8/21 @ 7:45am at Old Key West Resort"},

    {name: "Enzo's Hideaway", 

    category: "Food - Restaurant/Stall", 
    park: "Disney Springs", land: "None/Other", 
    priority: "Medium", 
    notes:"Reservation for 2 - 8/19 @ 4:45pm"},

# Sunday

    {name: "Ale & Compass", 

    category: "Food - Restaurant/Stall", 
    park: "Resorts", land: "None/Other", 
    priority: "Medium", 
    notes:"Reservation for 2 - 8/22 @ 9:35am"}

])