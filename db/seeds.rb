# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'open-uri'

User.delete_all
Board.delete_all
Pin.delete_all

demo = User.create!({
    email: "demo@gmail.com",
    password: "123123", 
    fname: "Demo", 
    lname: "Ng", 
    description: "Hi, I'm demo user", 
    location: "Dallas Texas", 
})

sarah = User.create!({
    email: "sarah@gmail.com",
    password: "123123", 
    fname: "Sarah", 
    lname: "Brown", 
    description: "Hi, I'm Sarah", 
    location: "New York", 
})
jess = User.create!({
    email: "jess@gmail.com",
    password: "123123", 
    fname: "Jess", 
    lname: "Smith", 
    description: "Hi, I'm Jess", 
    location: "California", 
})
casey = User.create!({
    email: "casey@gmail.com",
    password: "123123", 
    fname: "casey", 
    lname: "Murrt", 
    description: "Hi, I'm Casey", 
    location: "Delaware", 
})






board = Board.create!({
    tite: "abc",
    boduy: "abc",
    id: demo.id
})


board_id: board.id


pic1 = 