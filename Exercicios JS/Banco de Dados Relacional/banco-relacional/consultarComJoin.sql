-- consulta de tabelas múltiplas (com chave estrangeira)

select * from estados e, cidades c -- esse tipo de consulta direta não é interessante, pois ele vai fazer um porduto cartesiano de todas as linhas da tabela "estados" relacionadas à todas as linhas da tabela "cidades". Então sempre coloque um filtro "where"

-- Será impresso a união da tabela "cidades" com a tabela "estados"
select * from `estados` e, cidades c
where e.id = c.estado_id;

-- Faz a consulta definindo as colunas e renomeando seus nomes na tabela
select
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
from estados e, cidades c
where e.id = c.estado_id;

--outra maneira de fazer consulata
select
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e 
inner join cidades c on e.id = c.estado_id