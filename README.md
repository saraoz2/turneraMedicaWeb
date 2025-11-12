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
* `crearPaciente()`
* `eliminarPaciente()`
* `consultarPaciente()`
* `actualizarPaciente()`
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
