-- INNER JOIN
-- interseção entre as duas tabelas.
select * from cidades c
inner join prefeitos p on c.id = p.cidade_id;

-- LEFT JOIN
-- Pega os prefeitos vinculados a uma cidade por meio de uma chave estrangeira(interseção), pega as cidades que não tem prefeito (left)
select * from cidades c
left join prefeitos p on c.id = p.cidade_id; -- pode usar "left Join" ou "left Outer Join". É a mesma coisa.

-- RIGHT JOIN
-- Pega os prefeitos vinculados a uma cidade por meio de uma chave estrangeira(interseção), pega os prefeitos que não tem cidade (right)
select * from cidades c
right join prefeitos p on c.id = p.cidade_id;

-- FULL JOIN
-- Pega os todos os prefeitos e cidades independete de estarem ou não vinculados por uma chave estrangeira
--O tipo de consulta comentado abaixo não é suportado por padrão no sql. Mas há uma maneira de resolver.
-- select * from cidades c
-- full join prefeito f on c.id = p.cidade_id;

--Maneira de adaptar o FULL JOIN para o sql
--União das consultas left e right com o union
--Pode ser usado o "union all"

select * from cidades c
left join prefeitos p on c.id = p.cidade_id
union
select * from cidades c
right join prefeitos p on c.id = p.cidade_id;