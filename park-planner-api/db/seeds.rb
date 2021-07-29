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

    {name: "Soarin' Around the World", 

    category: "Attraction", 
    park: "Epcot", land: "Future World", 
    priority: "Must", 
    notes:"Rope Drop"},

# Food & Wine

    {name: "Appleseed Orchard", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "World Showcase - Other", 
    priority: "High", 
    notes:"Frozen Apple Pie & Cinnamon Apple Cider"},

    {name: "Canada Marketplace", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "Canada", 
    priority: "Must", 
    notes:"Le Cellier Filet & Cheddar Cheese Soup"},

    {name: "China Marketplace", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "China", 
    priority: "Must", 
    notes:"- Pan-fried Chicken Dumplings with House-made Sweet and Spicy Sauce
    - ZiRan Beef Bao Bun: Grilled Beef with Cumin
    - Crispy-fried Pepper Shrimp with Spicy Sichuan Noodles"},

    {name: "Donut Box", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "World Showcase - Other", 
    priority: "High", 
    notes:"Candy Jar Donut" },

    {name: "Flavors from the Fire (NFL)", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "World Showcase - Other", 
    priority: "Medium", 
    notes:"The Smores Whoopie Pie-lon"},

    {name: "France Marketplace", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "France", 
    priority: "Must", 
    notes:"La Passion Martini Slushy: Vodka, Grey Goose Le Citron Vodka, Cranberry and Passion Fruit Juice // - Beignet aux Trois Fromages: Warm Beignet filled with 3 Cheeses

    - Croissant aux Escargots: Escargot Croissant with Garlic and Parsley,
    
    -Coq au Vin, Pommes Dauphine: Chicken braised in Burgundy Wine with Bacon and Puffed Potatoes,
    
    -Crème Brûlée au Grand Marnier: Vanilla Crème Brûlée with Grand Marnier Liqueur (contains alcohol) "},

    {name: "Hawaii Marketplace", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "World Showcase - Other", 
    priority: "Medium", 
    notes:"Aulani Sunrise - Vodka, Pineapple Juice, Grenadine"},

    {name: "Hops and Barley", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "World Showcase - Other", 
    priority: "Low", 
    notes:"Lobster Roll"},

    {name: "Shimmering Sips", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "World Showcase - Other", 
    priority: "High", 
    notes:"Key Lime Mimosa with Cranberry"},    

# Other

    {name: "Spaceship Earth", 

    category: "Attraction", 
    park: "Epcot", land: "Future World", 
    priority: "Must", 
    notes:""},

    {name: "Living with the Land", 

    category: "Attraction", 
    park: "Epcot", land: "Future World", 
    priority: "Must", 
    notes:""},

    {name: "Journey into Imagination with Figment", 

    category: "Attraction", 
    park: "Epcot", land: "Future World", 
    priority: "Low", 
    notes:""},

    {name: "Gran Fiesta Tour", 

    category: "Attraction", 
    park: "Epcot", land: "Mexico", 
    priority: "Must", 
    notes:""},


    {name: "Test Track", 

    category: "Attraction", 
    park: "Epcot", land: "Future World", 
    priority: "Low", 
    notes:"If I am feeling brave"},

    {name: "The Seas with Nemo & Friends", 

    category: "Attraction", 
    park: "Epcot", land: "Future World", 
    priority: "Must", 
    notes:"Near dinner"},

    {name: "Coral Reef", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "Future World", 
    priority: "Must", 
    notes:"Reservation for 2 - 8/19 @ 4:45pm"},

    {name: "Gelateria Toscana", 

    category: "Food - Restaurant/Stall", 
    park: "Epcot", land: "Italy", 
    priority: "Low", 
    notes:"Fireworks Dessert"},

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
    park: "Magic Kingdom", land: "Adventureland", 
    priority: "Must", 
    notes:"Aloha Aisle, mobile orders accepted"},

    {name: "Jungle Cruise", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Adventureland", 
    priority: "Must", 
    notes:"Head over to adventureland after wrapping up Tomorrowland"},

    {name: "Pirates of the Carribbean", 

    category: "Attraction", 
    park: "Magic Kingdom", land: "Adventureland", 
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

    {name: "Mickey Bar & Sandwich", 

    category: "Food - Item", 
    park: "Magic Kingdom", land: "None/Other", 
    priority: "Low", 
    notes:"Snack carts"},

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
    
    {name: "Lightning McQueen's Racing Academy", 

    category: "Attraction", 
    park: "Hollywood Studios", land: "Sunset Boulevard", 
    priority: "Low", 
    notes:""},

    {name: "Mickey & Minnie's Runaway Railway", 

    category: "Attraction", 
    park: "Hollywood Studios", land: "Hollywood Boulevard", 
    priority: "High", 
    notes:"Long lines, so do it earlier in the day"},

    {name: "Millennium Falcon: Smugglers Run", 

    category: "Attraction", 
    park: "Hollywood Studios", land: "Star Wars: Galaxy's Edge", 
    priority: "Must", 
    notes:"Rope Drop"},

    {name: "Star Wars: Galaxy's Edge", 

    category: "Attraction", 
    park: "Hollywood Studios", land: "Star Wars: Galaxy's Edge", 
    priority: "Low", 
    notes:"Need to join queue at 7 and 1"},

    {name: "Star Tours", 

    category: "Attraction", 
    park: "Hollywood Studios", land: "Echo Lake", 
    priority: "Medium", 
    notes:""},

    {name: "MuppetVision", 

    category: "Attraction", 
    park: "Hollywood Studios", land: "Grand Avenue", 
    priority: "Medium", 
    notes:""},

    {name: "Alien Swirling Saucers", 

    category: "Attraction", 
    park: "Hollywood Studios", land: "Toy Story Land", 
    priority: "Medium", 
    notes:""},

    {name: "Toy Story Mania", 

    category: "Attraction", 
    park: "Hollywood Studios", land: "Toy Story Land", 
    priority: "Must", 
    notes:""},

    {name: "Anaheim Produce", 

    category: "Food - Restaurant/Stall", 
    park: "Hollywood Studios", land: "Sunset Boulevard", 
    priority: "Medium", 
    notes:"Mickey Pretzels & Ice Creams"},

    {name: "Trolley Car Cafe", 

    category: "Food - Restaurant/Stall", 
    park: "Hollywood Studios", land: "Hollywood Boulevard", 
    priority: "High", 
    notes:"Carrot Cake Cookies, also has starbucks drinks including cold brew"},

    {name: "Oga's Cantina", 

    category: "Food - Restaurant/Stall", 
    park: "Hollywood Studios", land: "Star Wars: Galaxy's Edge", 
    priority: "Medium", 
    notes:"Bar with non-alcoholic options"},

    {name: "Sci-Fi Dine In", 

    category: "Food - Restaurant/Stall", 
    park: "Hollywood Studios", land: "Commisary Lane", 
    priority: "High", 
    notes:"If we can get in"},

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