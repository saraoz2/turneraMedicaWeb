import express from 'express'
import {pool} from './db.js'
import pacientesRoutes from './routes/pacientes.routes.js'
import medicosRoutes from './routes/medicos.routes.js'
import turnosRoutes from './routes/turnos.routes.js'

const app = express()
 
app.use(express.json())

app.use
app.use('/api',pacientesRoutes)
app.use('/api',medicosRoutes)
app.use('/api',turnosRoutes)

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})

app.listen(3000)
console.log('server running in port 3000')