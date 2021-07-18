-- Você pode inserir manualmente o ID desde que ele não esteja sendo usado
insert into estados (id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'Sul', 2.54) -- No próximo auto incremento será utilizado o id 1001

insert into estados (nome, sigla, regiao, populacao)
values ('Mais Novo', 'MN', 'Norte', 2.51)

SELECT * FROM `estados`