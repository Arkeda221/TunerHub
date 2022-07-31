const db = require('../db')
const Car = require('../models/cars')

//Connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cars = [
    {
      image: 'https://i.imgur.com/FHacSMl.png',
      make: 'Nissan',
      model: '370z',
      owner: '@alex_z34'
    },
    {
      image: 'https://i.imgur.com/baV9UmZ.png',
      make: 'Nissan',
      model: 'Cima Y32',
      owner: '@piotr.192'
    },
    {
      image: 'https://i.imgur.com/hVWJSfc.png',
      make: 'Nissan',
      model: '370z',
      owner: '@piotr.192'
    },
    {
      image: 'https://i.imgur.com/BhkPyJM.png',
      make: 'Honda',
      model: 'S2000',
      owner: '@fuzzy_s2k'
    },
    {
      image: 'https://i.imgur.com/V2VGuLS.png',
      make: 'Nissan',
      model: 'R34 GT-R',
      owner: '@brianoconner'
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
