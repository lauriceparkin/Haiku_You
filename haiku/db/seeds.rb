# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Poem.destroy_all
Comment.destroy_all

User.create!(username: "admin", email:"admin@email.com", password: "123456")


Poem.create!(content:"Urban chaos in brain, Should I have just stayed in bed?, Splendid noise ahead", user_id: 1)

Poem.create!(content:"Feel the cold wind whip, No warm sad between my toes, The waves crash with chills", user_id: 1)

Poem.create!(content:"Buy it, Cook it, Eat, Did you test the recipe?, Pain in my belly", user_id: 1)

Poem.create!(content:"A dreary day ends, City of Dreams sees no light, Fade out into sleep", user_id: 1)

Poem.create!(content:"Rhetoric and Spin, Inner cynic rise again, Listen, Reject, Vote", user_id: 1)

Poem.create!(content:"The soles are worn down, Yet the spirit is lifted, New shoes tomorrow", user_id: 1)

Poem.create!(content:"Looking for answers, Invisible to the eye, Persistent with hope", user_id: 1)

