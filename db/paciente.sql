create table paciente
(
    id        int auto_increment
        primary key,
    nombre    varchar(20) not null,
    apellido  varchar(20) not null,
    telefono  varchar(15) null,
    dni       int         not null,
    fecha_nac date        null
);

INSERT INTO turneramedicaweb.paciente (id, nombre, apellido, telefono, dni, fecha_nac) VALUES (1, 'Santiago', 'Araoz', '888888', 23414715, '1975-08-10');
INSERT INTO turneramedicaweb.paciente (id, nombre, apellido, telefono, dni, fecha_nac) VALUES (3, 'Lorena', 'Rossi', '666666', 22403052, '1971-09-16');
