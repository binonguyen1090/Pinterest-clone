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

u1 = User.create!({ email: "demo@gmail.com", password: "123123", fname: "Demo", lname: "Ng", description: "Hi, I'm demo user", location: "Dallas Texas" })
u2 = User.create!({ email: "sarah@gmail.com", password: "123123", fname: "Sarah", lname: "Brown", description: "Hi, I'm Sarah", location: "New York" })
u3 = User.create!({email: "jess@gmail.com", password: "123123", fname: "Jess", lname: "Smith", description: "Hi, I'm Jess", location: "California" })
u4 = User.create!({ email: "casey@gmail.com",password: "123123", fname: "casey", lname: "Murrt", description: "Hi, I'm Casey", location: "Delaware" })


b1 = Board.create!({ title: "Fashion", body: "Welcome, this is all the fashion",user_id: u1.id })
b2 = Board.create!({ title: "Food", body: "Welcome, this is all the food",user_id: u1.id })
b3 = Board.create!({ title: "Place", body: "Welcome, this is all the place",user_id: u1.id })


b4 = Board.create!({ title: "Fashion", body: "Welcome, this is all the fashion",user_id: u2.id })
b5 = Board.create!({ title: "Food", body: "Welcome, this is all the food",user_id: u2.id })
b6 = Board.create!({ title: "Place", body: "Welcome, this is all the place",user_id: u2.id })


b7 = Board.create!({ title: "Fashion", body: "Welcome, this is all the fashion",user_id: u3.id })
b8 = Board.create!({ title: "Food", body: "Welcome, this is all the food",user_id: u3.id })
b9 = Board.create!({ title: "Place", body: "Welcome, this is all the place",user_id: u3.id })


b10 = Board.create!({ title: "Fashion", body: "Welcome, this is all the fashion",user_id: u4.id })
b11 = Board.create!({ title: "Food", body: "Welcome, this is all the food",user_id: u4.id })
b12 = Board.create!({ title: "Place", body: "Welcome, this is all the place",user_id: u4.id })

p1 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p1.jpg')
p1.photo.attach(io: file, filename: "p1.jpg")

p2 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p2.jpg')
p2.photo.attach(io: file, filename: "p2.jpg")


p4 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p4.jpg')
p4.photo.attach(io: file, filename: "p4.jpg")

p5 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p5.jpg')
p5.photo.attach(io: file, filename: "p5.jpg")

p6 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p6.jpg')
p6.photo.attach(io: file, filename: "p6.jpg")

p7 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p7.jpg')
p7.photo.attach(io: file, filename: "p7.jpg")

p8 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p8.jpg')
p8.photo.attach(io: file, filename: "p8.jpg")

p9 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p9.jpg')
p9.photo.attach(io: file, filename: "p9.jpg")

p10 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p10.jpg')
p10.photo.attach(io: file, filename: "p10.jpg")

# p11 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
# file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p11.jpg')
# p11.photo.attach(io: file, filename: "p11.jpg")

p12 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p12.jpg')
p12.photo.attach(io: file, filename: "p12.jpg")

p13 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p13.jpg')
p13.photo.attach(io: file, filename: "p13.jpg")

p14 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p14.jpg')
p14.photo.attach(io: file, filename: "p14.jpg")

p15 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p15.jpg')
p15.photo.attach(io: file, filename: "p15.jpg")

p16 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p16.jpg')
p16.photo.attach(io: file, filename: "p16.jpg")

p17 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p17.jpg')
p17.photo.attach(io: file, filename: "p17.jpg")

p18 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p18.jpg')
p18.photo.attach(io: file, filename: "p18.jpg")

p19 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p19.jpg')
p19.photo.attach(io: file, filename: "p19.jpg")

p20 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p20.jpg')
p20.photo.attach(io: file, filename: "p20.jpg")

p21 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p21.jpg')
p21.photo.attach(io: file, filename: "p21.jpg")

p22 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p22.jpg')
p22.photo.attach(io: file, filename: "p22.jpg")

p23 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p23.jpg')
p23.photo.attach(io: file, filename: "p23.jpg")

p24 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p24.jpg')
p24.photo.attach(io: file, filename: "p24.jpg")

p25 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p25.jpg')
p25.photo.attach(io: file, filename: "p25.jpg")

p26 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p26.jpg')
p26.photo.attach(io: file, filename: "p26.jpg")

p27 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p27.jpg')
p27.photo.attach(io: file, filename: "p27.jpg")

p28 = Pin.create!({ title: "place", body: "place" , board_id: b3.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p28.jpg')
p28.photo.attach(io: file, filename: "p28.jpg")

#

p29 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p29.jpg')
p29.photo.attach(io: file, filename: "p29.jpg")

p30 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p30.jpg')
p30.photo.attach(io: file, filename: "p30.jpg")

p31 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p31.jpg')
p31.photo.attach(io: file, filename: "p31.jpg")

p32 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p32.jpg')
p32.photo.attach(io: file, filename: "p32.jpg")

p33 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p33.jpg')
p33.photo.attach(io: file, filename: "p33.jpg")

p34 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p34.jpg')
p34.photo.attach(io: file, filename: "p34.jpg")

p35 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p35.jpg')
p35.photo.attach(io: file, filename: "p35.jpg")

p36 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p36.jpg')
p36.photo.attach(io: file, filename: "p36.jpg")

p37 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p37.jpg')
p37.photo.attach(io: file, filename: "p37.jpg")

p38 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p38.jpg')
p38.photo.attach(io: file, filename: "p38.jpg")

p39 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p39.jpg')
p39.photo.attach(io: file, filename: "p39.jpg")

p40 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p40.jpg')
p40.photo.attach(io: file, filename: "p40.jpg")

p41 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p41.jpg')
p41.photo.attach(io: file, filename: "p41.jpg")

p42 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p42.jpg')
p42.photo.attach(io: file, filename: "p42.jpg")

p43 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p43.jpg')
p43.photo.attach(io: file, filename: "p43.jpg")

p44 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p44.jpg')
p44.photo.attach(io: file, filename: "p44.jpg")

p45 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p45.jpg')
p45.photo.attach(io: file, filename: "p45.jpg")

p46 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p46.jpg')
p46.photo.attach(io: file, filename: "p46.jpg")

p47 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p47.jpg')
p47.photo.attach(io: file, filename: "p47.jpg")

p48 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p48.jpg')
p48.photo.attach(io: file, filename: "p48.jpg")

p49 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p49.jpg')
p49.photo.attach(io: file, filename: "p49.jpg")

p50 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p50.jpg')
p50.photo.attach(io: file, filename: "p50.jpg")

p51 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p51.jpg')
p51.photo.attach(io: file, filename: "p51.jpg")

p52 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p52.jpg')
p52.photo.attach(io: file, filename: "p52.jpg")

p53 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p53.jpg')
p53.photo.attach(io: file, filename: "p53.jpg")

p54 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p54.jpg')
p54.photo.attach(io: file, filename: "p54.jpg")

p55 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p55.jpg')
p55.photo.attach(io: file, filename: "p55.jpg")

p56 = Pin.create!({ title: "place", body: "place" , board_id: b6.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p56.jpg')
p56.photo.attach(io: file, filename: "p56.jpg")

#

p57 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p57.jpg')
p57.photo.attach(io: file, filename: "p57.jpg")

p58 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p58.jpg')
p58.photo.attach(io: file, filename: "p58.jpg")

p59 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p59.jpg')
p59.photo.attach(io: file, filename: "p59.jpg")

p60 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p60.jpg')
p60.photo.attach(io: file, filename: "p60.jpg")

p61 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p61.jpg')
p61.photo.attach(io: file, filename: "p61.jpg")

p62 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p62.jpg')
p62.photo.attach(io: file, filename: "p62.jpg")

p63 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p63.jpg')
p63.photo.attach(io: file, filename: "p63.jpg")

p64 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p64.jpg')
p64.photo.attach(io: file, filename: "p64.jpg")

p65 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p65.jpg')
p65.photo.attach(io: file, filename: "p65.jpg")

p66 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p66.jpg')
p66.photo.attach(io: file, filename: "p66.jpg")

p67 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p67.jpg')
p67.photo.attach(io: file, filename: "p67.jpg")

p68 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p68.jpg')
p68.photo.attach(io: file, filename: "p68.jpg")

p69 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p69.jpg')
p69.photo.attach(io: file, filename: "p69.jpg")

p70 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p70.jpg')
p70.photo.attach(io: file, filename: "p70.jpg")

p71 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p71.jpg')
p71.photo.attach(io: file, filename: "p71.jpg")

p72 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p72.jpg')
p72.photo.attach(io: file, filename: "p72.jpg")

p73 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p73.jpg')
p73.photo.attach(io: file, filename: "p73.jpg")

p74 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p74.jpg')
p74.photo.attach(io: file, filename: "p74.jpg")

p75 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p75.jpg')
p75.photo.attach(io: file, filename: "p75.jpg")

p76 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p76.jpg')
p76.photo.attach(io: file, filename: "p76.jpg")

p77 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p77.jpg')
p77.photo.attach(io: file, filename: "p77.jpg")

p78 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p78.jpg')
p78.photo.attach(io: file, filename: "p78.jpg")

p79 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p79.jpg')
p79.photo.attach(io: file, filename: "p79.jpg")

p80 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p80.jpg')
p80.photo.attach(io: file, filename: "p80.jpg")

p81 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p81.jpg')
p81.photo.attach(io: file, filename: "p81.jpg")

p82 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p82.jpg')
p82.photo.attach(io: file, filename: "p82.jpg")

p83 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p83.jpg')
p83.photo.attach(io: file, filename: "p83.jpg")

p84 = Pin.create!({ title: "place", body: "place" , board_id: b9.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p84.jpg')
p84.photo.attach(io: file, filename: "p84.jpg")

#

p85 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p85.jpg')
p85.photo.attach(io: file, filename: "p85.jpg")

p86 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p86.jpg')
p86.photo.attach(io: file, filename: "p86.jpg")

p87 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p87.jpg')
p87.photo.attach(io: file, filename: "p87.jpg")

p88 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p88.jpg')
p88.photo.attach(io: file, filename: "p88.jpg")

p89 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p89.jpg')
p89.photo.attach(io: file, filename: "p89.jpg")

p90 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p90.jpg')
p90.photo.attach(io: file, filename: "p90.jpg")

p91 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p91.jpg')
p91.photo.attach(io: file, filename: "p91.jpg")

p92 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p92.jpg')
p92.photo.attach(io: file, filename: "p92.jpg")

p93 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p93.jpg')
p93.photo.attach(io: file, filename: "p93.jpg")

p94 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p94.jpg')
p94.photo.attach(io: file, filename: "p94.jpg")

p95 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p95.jpg')
p95.photo.attach(io: file, filename: "p95.jpg")

p96 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p96.jpg')
p96.photo.attach(io: file, filename: "p96.jpg")

p97 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p97.jpg')
p97.photo.attach(io: file, filename: "p97.jpg")

p98 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p98.jpg')
p98.photo.attach(io: file, filename: "p98.jpg")

p99 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p99.jpg')
p99.photo.attach(io: file, filename: "p99.jpg")

p100 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p100.jpg')
p100.photo.attach(io: file, filename: "p100.jpg")

p101 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p101.jpg')
p101.photo.attach(io: file, filename: "p101.jpg")

p102 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p102.jpg')
p102.photo.attach(io: file, filename: "p102.jpg")

p103 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p103.jpg')
p103.photo.attach(io: file, filename: "p103.jpg")

p104 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p104.jpg')
p104.photo.attach(io: file, filename: "p104.jpg")

p105 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p105.jpg')
p105.photo.attach(io: file, filename: "p105.jpg")

p106 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p106.jpg')
p106.photo.attach(io: file, filename: "p106.jpg")

p107 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p107.jpg')
p107.photo.attach(io: file, filename: "p107.jpg")

p108 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p108.jpg')
p108.photo.attach(io: file, filename: "p108.jpg")

p109 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p109.jpg')
p109.photo.attach(io: file, filename: "p109.jpg")

p110 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p110.jpg')
p110.photo.attach(io: file, filename: "p110.jpg")

p111 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p111.jpg')
p111.photo.attach(io: file, filename: "p111.jpg")

p112 = Pin.create!({ title: "place", body: "place" , board_id: b12.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/p112.jpg')
p112.photo.attach(io: file, filename: "p112.jpg")


################# 
# Fashion

f10 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f10.jpg')
f10.photo.attach(io: file, filename: "f10.jpg")

f11 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f11.jpg')
f11.photo.attach(io: file, filename: "f11.jpg")

f12 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f12.jpg')
f12.photo.attach(io: file, filename: "f12.jpg")

f13 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f13.jpg')
f13.photo.attach(io: file, filename: "f13.jpg")

f14 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f14.jpg')
f14.photo.attach(io: file, filename: "f14.jpg")

f15 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f15.jpg')
f15.photo.attach(io: file, filename: "f15.jpg")

f16 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f16.jpg')
f16.photo.attach(io: file, filename: "f16.jpg")

f17 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f17.jpg')
f17.photo.attach(io: file, filename: "f17.jpg")

f18 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f18.jpg')
f18.photo.attach(io: file, filename: "f18.jpg")

f2 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f2.jpg')
f2.photo.attach(io: file, filename: "f2.jpg")

f24 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f24.jpg')
f24.photo.attach(io: file, filename: "f24.jpg")

f25 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b1.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f25.jpg')
f25.photo.attach(io: file, filename: "f25.jpg")

#

f26 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f26.jpg')
f26.photo.attach(io: file, filename: "f26.jpg")

f27 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f27.jpg')
f27.photo.attach(io: file, filename: "f27.jpg")

f28 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f28.jpg')
f28.photo.attach(io: file, filename: "f28.jpg")

f30 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f30.jpg')
f30.photo.attach(io: file, filename: "f30.jpg")

f31 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f31.jpg')
f31.photo.attach(io: file, filename: "f31.jpg")

f32 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f32.jpg')
f32.photo.attach(io: file, filename: "f32.jpg")

f34 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f34.jpg')
f34.photo.attach(io: file, filename: "f34.jpg")

f37 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f37.jpg')
f37.photo.attach(io: file, filename: "f37.jpg")

f38 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f38.jpg')
f38.photo.attach(io: file, filename: "f38.jpg")

f39 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f39.jpg')
f39.photo.attach(io: file, filename: "f39.jpg")

f4 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f4.jpg')
f4.photo.attach(io: file, filename: "f4.jpg")

f41 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b4.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f41.jpg')
f41.photo.attach(io: file, filename: "f41.jpg")


###
f42 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f42.jpg')
f42.photo.attach(io: file, filename: "f42.jpg")

f44 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f44.jpg')
f44.photo.attach(io: file, filename: "f44.jpg")

f45 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f45.jpg')
f45.photo.attach(io: file, filename: "f45.jpg")

f48 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f48.jpg')
f48.photo.attach(io: file, filename: "f48.jpg")

f49 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f49.jpg')
f49.photo.attach(io: file, filename: "f49.jpg")

f5 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f5.jpg')
f5.photo.attach(io: file, filename: "f5.jpg")

f50 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f50.jpg')
f50.photo.attach(io: file, filename: "f50.jpg")

f51 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f51.jpg')
f51.photo.attach(io: file, filename: "f51.jpg")

f53 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f53.jpg')
f53.photo.attach(io: file, filename: "f53.jpg")

f55 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f55.jpg')
f55.photo.attach(io: file, filename: "f55.jpg")

f6 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f6.jpg')
f6.photo.attach(io: file, filename: "f6.jpg")

f62 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b7.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f62.jpg')
f62.photo.attach(io: file, filename: "f62.jpg")


#

f63 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f63.jpg')
f63.photo.attach(io: file, filename: "f63.jpg")

f64 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f64.jpg')
f64.photo.attach(io: file, filename: "f64.jpg")

f65 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f65.jpg')
f65.photo.attach(io: file, filename: "f65.jpg")

f66 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f66.jpg')
f66.photo.attach(io: file, filename: "f66.jpg")

f67 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f67.jpg')
f67.photo.attach(io: file, filename: "f67.jpg")

f68 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f68.jpg')
f68.photo.attach(io: file, filename: "f68.jpg")

f69 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f69.jpg')
f69.photo.attach(io: file, filename: "f69.jpg")

f7 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f7.jpg')
f7.photo.attach(io: file, filename: "f7.jpg")

f70 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f70.jpg')
f70.photo.attach(io: file, filename: "f70.jpg")

f71 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f71.jpg')
f71.photo.attach(io: file, filename: "f71.jpg")

f72 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f72.jpg')
f72.photo.attach(io: file, filename: "f72.jpg")

f8 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f8.jpg')
f8.photo.attach(io: file, filename: "f8.jpg")

f9 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b10.id})
file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/f9.jpg')
f9.photo.attach(io: file, filename: "f9.jpg")

###Food
# e1 = Pin.create!({ title: "fashion", body: "fashion" , board_id: b2.id})
# file = open('https://binterest-seeds.s3-us-west-1.amazonaws.com/e1.jpg')
# e1.photo.attach(io: file, filename: "e1.jpg")
