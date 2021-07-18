-- Relação 1-N : Um Estado pode ter várias cidades 
-- Essa é outra maneira de criar tabela. Em ambas as formas (de criação de tabela) ela não deixará criar tabelas duplicadas, porém nesse em específico não dará nenhum tipo de erro caso a tabela já exista. Simplesmente ela não duplicará a tabela.
CREATE TABLE IF NOT EXISTS Cidades (
    id int unsigned not null auto_increment, -- chave primária
    nome varchar(255) not null,
    estado_id int unsigned not null,
    area DECIMAL(10, 2),
    PRIMARY KEY (id),
    foreign key(estado_id) references estados (id) -- chave estrangeira
);