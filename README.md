# TurneraMedicaWeb
version web del proyecto de LAB1

## Indice
* Medico
* paciente
* Turno
  


## Rutas
Todas las rutas deben empezar por 
`/api`
haciendo que quede
`localhost:3000/api/ruta`
una ruta que me gustaria destacar es
`get('/turno/paciente/:id', getTurnosPaciente)`
ya que permite mostrar los turnos de un paciente, faltaria hacer que se filtre por las pendientes.
![captura 1](ruta_turno_paciente.png)
## Paciente
clase para representar a los que van a ser atendidos
### Atributos
* id
* nombre
* apellido
* telefono
* dni
* fecha_nac
### Metodos
* `get('/paciente', getPacientes)`
* `get('/paciente/:id', getPaciente)`
* `post('/paciente', createPaciente)`
* `put('/paciente/:id', updatePaciente)`
* `patch('/paciente/:id', updatePatchPaciente)`
* `delete('/paciente/:id', deletePaciente)`


## Medico
clase para representar a los que van a atender personas
### atributos
* id
* nombre
* apellido
* telefono
* matricula
* correo
### metodos
* `get('/medico', getMedicos)`
* `get('/medico/:id', getMedico)`
* `post('/medico', createMedico)`
* `put('/medico/:id', updateMedico)`
* `patch('/medico/:id', updatePatchMedico)`
* `delete('/medico/:id', deleteMedico)`

## Turno
un turno necesita un paciente y un medico
### atributos
* id
* id_paciente
* id_medico
* fecha_Hora
### metodos
* `get('/turno', getTurnosAll)`
* `get('/turno/:id', getTurnoId)`
* `get('/turno/paciente/:id', getTurnosPaciente)`
* `post('/turno', createTurno)`
* `put('/turno/:id', updateTurno)`
* `patch('/turno/:id', updatePatchTurno)`
* `delete('/turno/:id', deleteTurno)`