const db = require('../db')
const Car = require('../models/cars')

//Connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cars = [
    {
      image: 'https://i.imgur.com/KDC6C24.jpg',
      make: 'Nissan',
      model: '370z',
      owner: '@alex_z34'
    },
    {
      image: 'https://i.imgur.com/xMf3s4V.jpg',
      make: 'Nissan',
      model: 'Cima Y32',
      owner: '@piotr.192'
    },
    {
      image: 'https://i.imgur.com/xujNH3g.jpg',
      make: 'Nissan',
      model: '370z',
      owner: '@piotr.192'
    },
    {
      image: 'https://i.imgur.com/gCuJ4gc.jpg',
      make: 'Mazada',
      model: 'Miata',
      owner: '@pimmatchstick'
    },
    {
      image: 'https://i.imgur.com/hlykFMv.jpg',
      make: 'Nissan',
      model: 'R34 GT-R',
      owner: '@pbrianoconner'
    }
  ]

  await Car.insertMany(cars)
  console.log('Cars have been tuned!')
}

const run = async () => {
  await main()
  db.close()
}

run()
