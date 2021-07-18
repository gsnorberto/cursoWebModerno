-- SOMA DA POPULAÇÃO POR REGIÃO
select 
    regiao as 'Região', 
    sum(populacao) as Total -- soma a população
from `estados`
group by regiao -- agrupa os dados por região, ou seja, a soma da população vai ter um valor total por região
order by Total desc

-- SOMA TOTAL
select 
    sum(populacao) as Total -- soma a população
from `estados`

-- MÉDIA - Soma total da população dividida pela quantidade de estados
select 
    avg(populacao) as Total -- soma a população
from `estados`

