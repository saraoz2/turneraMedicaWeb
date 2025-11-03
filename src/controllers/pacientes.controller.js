import { pool } from "../db.js"

export const getPacientes = async (req, res)=> {
   const [rows] = await pool.query('SELECT * FROM paciente')
   res.json(rows)
}

export const getPaciente = async (req, res)=> {
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM paciente WHERE id = ?',[req.params.id])
    console.log(rows)

    if (rows.length <= 0 ) return res.status(404).json({
        message: 'Paciente no encontrado'
    })

    res.json(rows[0])
}

export const createPaciente = async (req, res)=> {
    const {nombre, apellido, telefono, dni, fecha_nac} = req.body
    const [rows] = await pool.query('INSERT INTO paciente(nombre, apellido, telefono, dni, fecha_nac) VALUES (?,?,?,?,?)',[nombre, apellido, telefono, dni, fecha_nac])
    res.send({
        id: rows.insertId,
        nombre,
        apellido,
        telefono,
        dni,
        fecha_nac
    })
}

export const updatePaciente = async (req, res)=> {
    const {id} = req.params
    const {nombre, apellido, telefono, dni, fecha_nac} = req.body

    const [result] = await pool.query('UPDATE paciente SET nombre =?, apellido =?, telefono =?, dni =?, fecha_nac =? WHERE id = ?',[nombre, apellido, telefono, dni, fecha_nac, id])
    if (result.affectedRows == 0) return res.status(404).json({
        message: 'paciente no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM paciente WHERE id = ?',[id])
    res.json(rows[0])

}

export const updatePatchPaciente = async (req, res)=> {
    const {id} = req.params
    const {nombre, apellido, telefono, dni, fecha_nac} = req.body

    const [result] = await pool.query('UPDATE paciente SET nombre =IFNULL(?, nombre), apellido =IFNULL(?, apellido), telefono =IFNULL(?, telefono), dni =IFNULL(?, dni), fecha_nac =IFNULL(?, fecha_nac) WHERE id = ?',[nombre, apellido, telefono, dni, fecha_nac, id])
    if (result.affectedRows == 0) return res.status(404).json({
        message: 'paciente no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM paciente WHERE id = ?',[id])
    res.json(rows[0])

}

export const deletePaciente = async (req, res)=> {
    console.log(req.params.id)
    const [result] = await pool.query('DELETE FROM paciente WHERE id = ?',[req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'paciente no encontrado'
    })

    res.send(204)

}