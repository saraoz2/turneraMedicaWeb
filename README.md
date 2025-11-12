# TurneraMedicaWeb
version web del proyecto de LAB1

## Indice
* Medico
* paciente
* Turno
  


## Rutas
todos los tipos de usuario
### Atributos
* id
* nombre
* numeroTelefono
* email
* obraSocial
  
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