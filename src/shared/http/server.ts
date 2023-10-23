import 'express-async-error'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3000, () => console.log('Running app in port 3000'))