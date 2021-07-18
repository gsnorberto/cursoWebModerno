-- Relação 1-1 : Um prefeito pode estar associado a apenas uma cidades

-- Há um questionamento sobre qual a necessidade de se criar uma tabela com relação 1-1 visto que nessa situação todos os dados poderiam ficam em uma mesma tabela. E além disso, consultas por "join" são mais lentas do que consultas em uma única tabela. Então cabe uma decisão mais específica verificando, por exemplo, a quantidade de colunas de cada uma dessas tabelas, e a quantidade de consultas que serão realizadas através delas

CREATE table if not exists prefeitos(
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary key (id),
    unique key (cidade_id), -- só pode estar associada a uma chave estrangeira exclusiva.
    foreign key (cidade_id) references cidades(id)
);
