import { Router } from "express";
import {getPacientes, createPaciente, updatePaciente, deletePaciente, getPaciente} from '../controllers/pacientes.controller.js'

const router = Router()

router.get('/paciente', getPacientes)
router.get('/paciente/:id', getPaciente)
router.post('/paciente', createPaciente)
router.put('/paciente', updatePaciente)
router.delete('/paciente', deletePaciente)

export default router