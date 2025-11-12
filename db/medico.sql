create table medico
(
    id        int auto_increment
        primary key,
    nombre    varchar(20) null,
    apellido  varchar(20) null,
    telefono  varchar(20) null,
    matricula int         not null,
    correo    varchar(30) null
);

INSERT INTO turneramedicaweb.medico (id, nombre, apellido, telefono, matricula, correo) VALUES (1, 'Maximiliano', 'Rossi', '666666', 22403052, 'drmxrossi@gmail.com');
