-- RELAÇÃO N-N entre cidades e empresas.

create table if not exists empresas (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj int unsigned,
    primary key (id),
    unique key (cnpj)
);

select * from empresas;

-- Unidades das empresas por cidades
create table if not exists empresas_unidades(
    empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede tinyint(1) not null, -- diz se a empresa nessa cidade é sede ou não
    primary key(empresa_id, cidade_id)
)

