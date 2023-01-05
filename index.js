import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

// mongoose.connect('mongodb://nico:password@monguito:27017/miapp?authSource=admin')
'mongodb://127.0.0.1:27017/myapp'
mongoose.connect('mongodb://nico:password@localhost:27017/monguito?authSource=admin')
app.get('/', async (_req, res) => {
  console.log('listando... chanchitos...')
  // return res.send({si: 'si'})
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  // res.send({no: 'no'})
  await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))