import { Router } from "express";
import {getTurnosAll, getTurnoId, getTurnosPaciente, createTurno, updateTurno, updatePatchTurno, deleteTurno} from '../controllers/turnos.controller.js'

const router = Router()

router.get('/turno', getTurnosAll)
router.get('/turno/:id', getTurnoId)
router.get('/turno/paciente/:id', getTurnosPaciente)
router.post('/turno', createTurno)
router.put('/turno/:id', updateTurno)
router.patch('/turno/:id', updatePatchTurno)
router.delete('/turno/:id', deleteTurno)

export default router