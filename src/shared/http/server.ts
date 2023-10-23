import 'express-async-error'
import express, { json } from 'express'
import cors from 'cors'
import routerSetup from '../../config/routes'

const app = express()
app.use(cors())
app.use(json())
routerSetup(app)

app.listen(3000, () => console.log('Running app in port 3000'))
