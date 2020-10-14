# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dinosaur.create(genus: "Oviraptor", grouping: "Theropod", meaning: "Egg thief", type_species: "O. philoceratops", discovery_year: 1924, discovery_person: "Ostrom", size: 1.8, period: "Late Cretaceous", distribution: "Mongolia", description: "The mouth seems to have been evolved for crushing eggshells, shellfish, or nuts.")
Dinosaur.create(genus: "Othnielia", grouping: "Ornithopod", meaning: "Othniel's One", type_species: "O. rex", discovery_year: 1877, discovery_person: "Marsh", size: 1.4, period: "Late Jurassic", distribution: "Colorado, Utah, and Wyoming", description: "Known from the remains of two complete skeletons, now shown at DMNS.")
Dinosaur.create(genus: "Saltasaurus", grouping: "Sauropod", meaning: "Lizard of Salta Province", type_species: "S. Ioricatus", discovery_year: 1980, discovery_person: "Bonaparte and Powell", size: 12, period: "Late Cretaceous", distribution: "Argentina to Uruguay", description: "One of the first titanosaurid sauropods to display armor plating.")
Dinosaur.create(genus: "Nodocephalosaurus", grouping: "Ankylosaur", meaning: "Node-headed Lizard", type_species: "N. kirtlandensis", discovery_year: 1999, discovery_person: "Sullivan", size: 6, period: "Late Cretaceous", distribution: "New Mexico", description: "The skull of this animal is high and arched, and the armor on the head is distinctive.")
Dinosaur.create(genus: "Anchisaurus", grouping: "Prosauropod", meaning: "Near Lizard", type_species: "A. major", discovery_year: 1885, discovery_person: "Marsh", size: 2.5, period: "Early Jurassic", distribution: "New England", description: "Not recognized as a dinosaur until 1885.")