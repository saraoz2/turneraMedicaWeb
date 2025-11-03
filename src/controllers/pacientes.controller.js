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

export const updatePaciente = (req, res)=> res.send('actualizando pacientes')

export const deletePaciente = (req, res)=> res.send('eliminando pacientes')