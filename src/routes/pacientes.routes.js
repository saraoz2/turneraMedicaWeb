import { Router } from "express";
import {getPacientes, createPaciente, updatePaciente, deletePaciente, getPaciente, updatePatchPaciente} from '../controllers/pacientes.controller.js'

const router = Router()

router.get('/paciente', getPacientes)
router.get('/paciente/:id', getPaciente)
router.post('/paciente', createPaciente)
router.put('/paciente/:id', updatePaciente)
router.patch('/paciente/:id', updatePatchPaciente)
router.delete('/paciente/:id', deletePaciente)

export default router