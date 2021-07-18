select * from estados -- selecione o texto ao lado e execute "ctrl + shift + e"

select nome, sigla from estados -- filtra apenas com as colunas "sigla e nome"

select nome, sigla as 'Sigla teste' from estados 

select nome, sigla from estados where regiao = 'Sul'

select * from estados
where populacao >= 10
order by populacao desc --ordenação de forma decrescente