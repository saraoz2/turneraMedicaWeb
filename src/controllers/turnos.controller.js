import { pool } from "../db.js"

export const getTurnosAll = async (req, res)=> {
    try {
        const [rows] = await pool.query('SELECT * FROM turno')
        res.json(rows)
    } catch (error) {
       return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}

export const getTurnoId = async (req, res)=> {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM turno WHERE id = ?',[req.params.id])
        console.log(rows)

        if (rows.length <= 0 ) return res.status(404).json({
            message: 'medico no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        
    }
}

export const getTurnosPaciente = async (req, res)=> {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query('SELECT t.id AS id_turno, p.nombre AS nombre_paciente, p.apellido AS apellido_paciente, m.nombre AS nombre_medico, m.apellido AS apellido_medico, t.fechaHora FROM turno t JOIN paciente p ON t.id_paciente = p.id JOIN medico m ON t.id_medico = m.id WHERE p.id = ?',[req.params.id])
        console.log(rows)

        if (rows.length <= 0 ) return res.status(404).json({
            message: 'medico no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        
    }
}

export const createTurno = async (req, res)=> {
    try {
        const {id_paciente, id_medico, fechaHora} = req.body
        const [rows] = await pool.query('INSERT INTO turno(id_paciente, id_medico, fechaHora) VALUES (?,?,?)',[id_paciente, id_medico, fechaHora])
        res.send({
            id: rows.insertId,
            id_paciente,
            id_medico,
            fechaHora
        })
    } catch (error) {
        return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}

export const updateTurno = async (req, res)=> {
    try {
        const {id} = req.params
        const {id_paciente, id_medico, fechaHora} = req.body

        const [result] = await pool.query('UPDATE turno SET id_paciente =?, id_medico =?, fechaHora =? WHERE id = ?',[id_paciente, id_medico, fechaHora, id])
        if (result.affectedRows == 0) return res.status(404).json({
            message: 'turno no encontrado'
        })

        const [rows] = await pool.query('SELECT t.id AS id_turno, p.nombre AS nombre_paciente, p.apellido AS apellido_paciente, m.nombre AS nombre_medico, m.apellido AS apellido_medico, t.fechaHora FROM turno t JOIN paciente p ON t.id_paciente = p.id JOIN medico m ON t.id_medico = m.id WHERE t.id = ?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}

export const updatePatchTurno = async (req, res)=> {
    try {
        const {id} = req.params
        const {id_paciente, id_medico, fechaHora} = req.body

        const [result] = await pool.query('UPDATE turno SET id_paciente =IFNULL(?, id_paciente), id_medico =IFNULL(?, id_medico), fechaHora =IFNULL(?, fechaHora) WHERE id = ?',[id_paciente, id_medico, fechaHora, id])
        if (result.affectedRows == 0) return res.status(404).json({
            message: 'turno no encontrado'
        })

        const [rows] = await pool.query('SELECT t.id AS id_turno, p.nombre AS nombre_paciente, p.apellido AS apellido_paciente, m.nombre AS nombre_medico, m.apellido AS apellido_medico, t.fechaHora FROM turno t JOIN paciente p ON t.id_paciente = p.id JOIN medico m ON t.id_medico = m.id WHERE p.id = ?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}

export const deleteTurno = async (req, res)=> {
    try {
        console.log(req.params.id)
        const [result] = await pool.query('DELETE FROM turno WHERE id = ?',[req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'turno no encontrado'
        })

        res.send(204)
    } catch (error) {
        return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}