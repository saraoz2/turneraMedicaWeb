# TurneraMedicaWeb
version web del proyecto de LAB1

## Indice
* Usuario
  * Medico
  * paciente
* Turno
  


## Usuario
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
* dni
### Metodos
* `crearPaciente()`
* `eliminarPaciente()`
* `consultarPaciente()`
* `actualizarPaciente()`
## Medico
clase para representar a los que van a atender personas
### atributos
* patente
* tarifa
### metodos

## Turno
un turno necesita un paciente y un medico
### atributos
* fecha
* hora
* paciente
* medico
* consultorio
* precioFinal
### metodos
