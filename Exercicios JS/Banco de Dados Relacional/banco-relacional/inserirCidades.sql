select * from `estados`

insert into cidades (nome, area, estado_id)
values('Campinas', 795, 29) -- 25 corresponde ao estado de SP

insert into cidades (nome, area, estado_id)
values('Niterói', 133.9, 23) -- 25 corresponde ao estado de SP

insert into cidades
    (nome, area, estado_id)
values(
    'Caruaru',
    920.6,
    (select id from estados where sigla = 'PE')
)

insert into cidades
    (nome, area, estado_id)
values(
    'Juazeiro do Norte',
    248.2,
    (select id from estados where sigla = 'CE')
)


select * from cidades

select * from estados

delete from cidades
where nome = 'Campinas'