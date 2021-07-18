alter table empresas modify cnpj varchar(14); -- altera o tamanho de caracteres permitidos em "cnpj" para 14

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 12343567000148),
    ('Vale', 12343567000147),
    ('Cielo', 12343567000146)

desc empresas; -- descreve o conteúdo da tabela
desc prefeitos;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values -- O último dígito será 0 se não for Sede e 1 se for Sede
    (1, 3, 1), -- empresa Bradesco, cidade Campinas, Sede Campinas
    (1, 4, 0), -- empresa Bradesco, cidade Niterói. Não é sede
    (2, 3, 0), -- empresa Vale, cidade Campinas
    (2, 4, 1) -- empresa Vale, cidade Niterói, Sede Campinas

select * from empresas
--TABELA DE EMPRESAS
-- id	nome	    cnpj
-- 1	Bradesco	12343567000148
-- 2	Vale	    12343567000147
-- 3	Cielo	    12343567000146

select * from cidades
--TABELA DE CIDADES
-- id	nome	            estado_id	area
-- 3	Campinas	        25	        795
-- 4	Niterói	            23	       133.9
-- 5	Caruaru             17      	920.6
-- 6	Juazeiro do Norte	6	       248.2

