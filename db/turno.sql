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

INSERT INTO turneramedicaweb.turno (id, id_paciente, id_medico, fechaHora) VALUES (1, 1, 1, '2025-11-04 14:30:00');
INSERT INTO turneramedicaweb.turno (id, id_paciente, id_medico, fechaHora) VALUES (2, 1, 1, '2025-11-05 15:30:00');
