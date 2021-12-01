import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
  res.send('Hello from Tiantian!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
