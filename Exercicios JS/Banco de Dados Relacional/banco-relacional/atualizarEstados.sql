-- IMPORTANTE: Muito cuidado com esse tipo de atualização, pois você pode perder todos os dados do DB se digitar um comando errado. No código abaixo, por exemplo, se não utilizar o código "where" todas as linhas do DB vão ficar com o nome de "Maranhão"
update estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = "MA"

select * from estados

update `estados`
set nome = 'Paraná',
    populacao = 11.32
where sigla = 'PR'