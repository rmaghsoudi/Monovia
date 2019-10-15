# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!(name: 'Romy', wallet: 10000)
user2 = User.create!(name: 'Johnathan', wallet: 1000)

game1 = Game.create!(subject: 'Computer Science')
game2 = Game.create!(subject: 'Music')

music1 = Property.create!(name: 'Bass Guitar', emoji: "🎸", value: 200, game_id: game1.id, user_id: user1.id)
music2 = Property.create!(name: 'Piano', emoji: "🎹", value: 500, game_id: game1.id)
music3 = Property.create!(name: 'Microphone', emoji: "🎙️", value: 100, game_id: game1.id, user_id: user1.id)
music4 = Property.create!(name: 'Drum Set', emoji: "🥁", value: 400, game_id: game1.id)
music5 = Property.create!(name: 'Keyboard', emoji: "🎹", value: 100, game_id: game1.id, user_id: user1.id)
music6 = Property.create!(name: 'Concert Tickets', emoji: "🎫", value: 100, game_id: game1.id)
music7 = Property.create!(name: 'Headphones', emoji: "🎧", value: 300, game_id: game1.id, user_id: user1.id)
music8 = Property.create!(name: 'Studio', emoji: "📻", value: 1000, game_id: game1.id)

csc1 = Property.create!(name: 'Macbook Pro', emoji: "💻", value: 500, game_id: game2.id, user_id: user2.id)
csc2 = Property.create!(name: 'Macbook Air', emoji: "💻", value: 300, game_id: game2.id)
csc3 = Property.create!(name: 'iMac Pro', emoji: "🖥️", value: 1000, game_id: game2.id)
csc4 = Property.create!(name: 'Algorithm Book', emoji: "📚", value: 100, game_id: game2.id, user_id: user2.id)
csc5 = Property.create!(name: 'If Else Mug', emoji: "☕", value: 100, game_id: game2.id)
csc6 = Property.create!(name: 'Monitor', emoji: "🖥️", value: 100, game_id: game2.id, user_id: user2.id)
csc7 = Property.create!(name: 'Chromebook', emoji: "💻", value: 200, game_id: game2.id)
csc8 = Property.create!(name: 'Motherboard', emoji: "⌨️", value: 300, game_id: game2.id, user_id: user2.id)



round1 = Round.create!(number: 1, game_id: game1.id)
round2 = Round.create!(number: 2, game_id: game1.id)
round3 = Round.create!(number: 1, game_id: game2.id)
round4 = Round.create!(number: 2, game_id: game2.id)
