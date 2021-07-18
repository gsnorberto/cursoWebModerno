insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Neves', 3),
    ('Raquel Lyra', 4),
    ('Zenaldo Coutinho', null); -- Não é obrigatório a chave estrangeira

insert into prefeitos
    (nome, cidade_id)
values
    ('Rafael Greca', null) -- pode ter mais de uma chave "null"

-- chaves estrangeiras duplicadas não podem
insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Pinheiro', 3)


select * from `cidades`;

select * from `prefeitos`;