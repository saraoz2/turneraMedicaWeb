import express from 'express'
import {pool} from './db.js'
import pacientesRoutes from './routes/pacientes.routes.js'

const app = express()


app.use(pacientesRoutes)

app.listen(3000)
console.log('server running in port 3000')