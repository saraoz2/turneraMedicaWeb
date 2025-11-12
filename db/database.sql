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

create table turno
(
    id          int auto_increment
        primary key,
    id_paciente int      not null,
    id_medico   int      not null,
    fechaHora   datetime not null,
    constraint fk_turno_medico
        foreign key (id_medico) references medico (id)
            on update cascade on delete cascade,
    constraint fk_turno_paciente
        foreign key (id_paciente) references paciente (id)
            on update cascade on delete cascade
);

