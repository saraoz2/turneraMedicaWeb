import { Router } from "express";

const router = Router()

router.get('/paciente', (req, res)=> res.send('obteniendo pacientes'))
router.post('/paciente', (req, res)=> res.send('creando pacientes'))
router.put('/paciente', (req, res)=> res.send('actualizando pacientes'))
router.delete('/paciente', (req, res)=> res.send('eliminando pacientes'))

export default router