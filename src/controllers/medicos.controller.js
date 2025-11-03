import { pool } from "../db.js"

export const getMedicos = async (req, res)=> {
    try {
        const [rows] = await pool.query('SELECT * FROM medico')
        res.json(rows)
    } catch (error) {
       return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}

export const getMedico = async (req, res)=> {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM medico WHERE id = ?',[req.params.id])
        console.log(rows)

        if (rows.length <= 0 ) return res.status(404).json({
            message: 'medico no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        
    }
}

export const createMedico = async (req, res)=> {
    try {
        const {nombre, apellido, telefono, matricula, correo} = req.body
        const [rows] = await pool.query('INSERT INTO medico(nombre, apellido, telefono, matricula, correo) VALUES (?,?,?,?,?)',[nombre, apellido, telefono, matricula, correo])
        res.send({
            id: rows.insertId,
            nombre,
            apellido,
            telefono,
            matricula,
            correo
        })
    } catch (error) {
        return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}

export const updateMedico = async (req, res)=> {
    try {
        const {id} = req.params
        const {nombre, apellido, telefono, matricula, correo} = req.body

        const [result] = await pool.query('UPDATE medico SET nombre =?, apellido =?, telefono =?, matricula =?, correo =? WHERE id = ?',[nombre, apellido, telefono, matricula, correo, id])
        if (result.affectedRows == 0) return res.status(404).json({
            message: 'medico no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM paciente WHERE id = ?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}

export const updatePatchMedico = async (req, res)=> {
    try {
        const {id} = req.params
        const {nombre, apellido, telefono, matricula, correo} = req.body

        const [result] = await pool.query('UPDATE medico SET nombre =IFNULL(?, nombre), apellido =IFNULL(?, apellido), telefono =IFNULL(?, telefono), matricula =IFNULL(?, matricula), correo =IFNULL(?, correo) WHERE id = ?',[nombre, apellido, telefono, matricula, correo, id])
        if (result.affectedRows == 0) return res.status(404).json({
            message: 'medico no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM medico WHERE id = ?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}

export const deleteMedico = async (req, res)=> {
    try {
        console.log(req.params.id)
        const [result] = await pool.query('DELETE FROM medico WHERE id = ?',[req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'medico no encontrado'
        })

        res.send(204)
    } catch (error) {
        return res.status(500).json({
        message: 'Algo va mal!!'
       }) 
    }
}