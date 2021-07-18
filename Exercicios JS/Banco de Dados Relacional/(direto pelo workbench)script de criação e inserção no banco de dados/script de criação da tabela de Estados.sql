USE teste;
create table estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- número inteiro, sem sinal, não nulo (Obrigatório), auto incrementado (significa que se você não passar um valor para o id ele vai gerar um valor inteiro e vai incrementando para cada nova inserção)
    nome VARCHAR(45) NOT NULL, -- Nome do estado
    sigla VARCHAR(2) NOT NULL, -- sigla do estado
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5, 2) NOT NULL, -- tem cinco dígitos com duas casas decimais. 45 milhões e 200 mil pessoas fica 45.2. 800 mil pessoas fica 0.8
    PRIMARY KEY (id), -- a chave primária será a coluna ID
    UNIQUE KEY (nome), -- não pode ter duplicidade
    UNIQUE KEY (sigla)
);