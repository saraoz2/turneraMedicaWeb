import { Router } from "express";
import {getMedicos, createMedico, updateMedico, deleteMedico, getMedico, updatePatchMedico} from '../controllers/medicos.controller.js'

const router = Router()

router.get('/medico', getMedicos)
router.get('/medico/:id', getMedico)
router.post('/medico', createMedico)
router.put('/medico/:id', updateMedico)
router.patch('/medico/:id', updatePatchMedico)
router.delete('/medico/:id', deleteMedico)

export default router