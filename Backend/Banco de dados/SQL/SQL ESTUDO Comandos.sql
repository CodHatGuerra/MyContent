
use cadastro
create DATABASE cadastro;
IF NOT EXISTS ( select * FROM sys.tables HWERE [nome] = 'minhaTB'

DROP TABLE cursos;
DROP TABLE gafanhotos;
DROP TABLE assiste;


/*CRIANDO UMA TABELA VALIDANDO IF NOT EXISTS*/

If Not Exists (select * from sys.tables where NAME = 'cursos')
Begin
CREATE TABLE cursos
(
idcurso int IDENTITY (1,1),
nome varchar(30) UNIQUE,
descricao text,
carga int ,
totalaulas int ,
ano int default '2022'
PRIMARY KEY (idcurso)
)
End
go

If Not Exists (select * from sys.tables where NAME = 'gafanhotos')
Begin
CREATE TABLE gafanhotos
(
id int IDENTITY (1,1),
nome varchar(50),
profissao VARCHAR (50),
nascimento DATE,
sexo CHAR(1) CHECK(sexo IN('F','M')),
peso decimal (4,2),
altura decimal (3,2),
nacionalidade varchar(50) DEFAULT  'BRASILEIRO',
cursopreferido int
PRIMARY KEY (id)
FOREIGN KEY (cursopreferido) REFERENCES cursos(idcurso)
);
End
go

If Not Exists (select * from sys.tables where NAME = 'assiste')
Begin
CREATE TABLE assiste
(
id int IDENTITY (1,1),
_data date,
idgafanhoto int,
idcurso int
PRIMARY KEY (id)
FOREIGN KEY (idgafanhoto) REFERENCES gafanhotos(id),
FOREIGN KEY (idcurso) REFERENCES cursos(idcurso)
);
End
go

/*INSERINDO */
INSERT INTO cursos
VALUES
('HTML5', 'Curso de HTML5', '40', '37', '2014'),
('Algoritmos', 'Logica de Programação', '20', '15', '2014'),
('Photoshop', 'Dicas de Photoshop CC', '10', '8', '2014'),
('PGP', 'Cruso de PHP para iniciantes', '40', '20', '2010'),
('Jarva', 'Introdução a Linguagem Java', '10', '29', '2000'),
('MySQL', 'Bancos de Dados MySQL', '30', '15', '2016'),
('Word', 'Curso Completo de World', '40', '30', '2016'),
('Sapateado', 'Danças Rítmicas', '40', '30', '2018'),
('Cozinha Árabe', 'Aprenda a fazer Kibe' ,'40', '30', '2018'),
('Youtuber', 'Gerar Polemica e Ganhar Inscritos', '5', '2', '2018')


INSERT INTO gafanhotos(nome, profissao, nascimento, sexo, peso, altura, nacionalidade)
VALUES
('Gabriel', 'Hacker', '1994-11-11', 'M', '71.00', '1.71', 'Brasileiro'),
('Rodrigo', 'Nasa', '1990-07-20', 'M', '86.00', '1.76', 'Brasileiro'),
('Cleber', 'Nasa', '1983-05-20', 'M', '79.00', '1.79', 'Brasileiro'),
('Fernando', 'Hacker 2', '1985-11-20', 'M', '90.00', '2.00', 'Brasileiro'),
('Erik', 'Hacker 2', '1992-10-25', 'M', '60.00', '1.65', 'Brasileiro'),
('Nelseta', 'Hacker 3', '1994-07-20', 'M', '84.00', '1.79', 'Brasileiro')

update gafanhotos set cursopreferido = '1' where id = '1';
update gafanhotos set cursopreferido = '2' where id = '2';
update gafanhotos set cursopreferido = '3' where id = '3';
update gafanhotos set cursopreferido = '4' where id = '4';
update gafanhotos set cursopreferido = '5' where id = '5';
update gafanhotos set cursopreferido = NULL where id = '6';

/* Automatizando Geracao de ID*/

ALTER TABLE cursos
ADD idcurso int IDENTITY(1,1)

/*ADICIONANDO UMA CONSTRAINT*/
ALTER TABLE cursos
ADD CONSTRAINT idcurso PRIMARY KEY(idcurso);


sp_help cursos  /*MOSTRA TODA INFORMAÇÃO SOBRE A TABELA E SUAS COLUNAS.*/
sp_help gafanhotos

select * from cursos
select * from gafanhotos


DELETE FROM gafanhotos WHERE id > 6;

/* Alterando Uma Tupla de uma linha */
UPDATE cursos
SET nome = 'HTML5'
WHERE idcurso = '1';

UPDATE cursos
SET nome = 'PHP', ano = '2014'
WHERE idcurso = '4';

/*LIMITANDO O UPDATE PARA APENAS 1 ROW*/
UPDATE TOP (1) cursos
SET nome = 'Java', carga ='40', ano = '2014'
WHERE idcurso = '5'

/* DELETA uma ROW aonde o ID é 8 */
DELETE FROM cursos
WHERE idcurso ='8';

DELETE TOP (2) FROM cursos
WHERE idcurso >= 8;

/* APAGA TODOS OS REGISTROS DA TABELA*/
TRUNCATE TABLE cursos;

/* FAZ UMA SELECAO ORDENADA*/
select * from cursos
ORDER BY nome;

select * from cursos
ORDER BY idcurso DESC;

SELECT ano,nome, carga FROM cursos
ORDER BY ano, nome;

/*BETWEEN, LOGICA PARA SELECIONAR UM VALOR NO INTERVALO ENTRE 30 E 40*/
SELECT * FROM cursos
where carga BETWEEN '30'and '40';
/* IN (ENTRE) */
SELECT * FROM cursos
where ano IN ('2014', '2015');
/* E  OR TAMBEM APLICA ! */
SELECT * FROM cursos
where carga > '35' AND totalaulas < '30';

SELECT * FROM cursos
WHERE nome LIKE 'P%';

SELECT * FROM cursos
WHERE nome LIKE 'P_P%';

 /* faz uma seleção DISTINTa informando apenas 1 conteudo sem repetir os mesmos*/
SELECT DISTINCT nome from cursos;

SELECT DISTINCT carga from cursos;

/* COUNT REALIZA A CONTAGEM DE REGISTROS COM OU SEM FILTROS APARTIR DO SELECT*/
SELECT COUNT(idcurso) from cursos
WHERE carga >= '20';

/* FAZ A SELECAO DA MAIOR TUPLA NA COLUNA*/
SELECT MAX (totalaulas) FROM cursos;
/* SELECAO DE NOME E TOTAL DE AULAS AONDE A TUPLA DE AULAS TEM O MAIOR VALOR DA COLUNA*/
SELECT nome,totalaulas FROM cursos
WHERE totalaulas = (SELECT MAX(totalaulas) FROM cursos);

SELECT MIN(totalaulas) FROM cursos;

/*SUM REALIZA UMA SOMA ENTRE CADA TUPLA DA COLUNA*/
SELECT SUM (totalaulas) FROM cursos; 
/*FAZ A MEDIA EM SOMA ENTRE AS TUPLAS DA COLUNA DA TABELA*/
SELECT AVG(totalaulas) FROM cursos;

SELECT nome, sexo FROM gafanhotos
WHERE sexo = 'M';

/*SELECIONA PESSOAS QUE A DATA DE NASCIMENTO ESTA ENTRE DATA A e B*/
SELECT nome, nascimento FROM gafanhotos
WHERE nascimento BETWEEN '01-01-1975' AND '31-12-1999';
 /*SELECAO*/
SELECT nome FROM gafanhotos
WHERE profissao = 'Hacker';
/*SELECAO*/
SELECT nome FROM gafanhotos
WHERE ((nacionalidade = 'Brasileiro') and (sexo = 'M') and (nome LIKE  'N%'));
/*SELECAO*/
SELECT nome, nacionalidade FROM gafanhotos
WHERE ((nacionalidade = 'BRASILEIRO') and (peso < '70'));
/*SELECAO*/
SELECT nome FROM gafanhotos
WHERE altura =
(SELECT MAX(altura) FROM gafanhotos);
/*SELECAO*/
SELECT MAX(altura) FROM gafanhotos;
/*SELECAO*/
SELECT AVG(peso) FROM gafanhotos;
/*SELECAO*/
SELECT MIN(peso) from gafanhotos
WHERE( (nacionalidade = 'BRASILEIRO') AND (nascimento BETWEEN '01-01-1975' AND '31-12-1999'));
/*SELECAO*/
SELECT COUNT(nome) from gafanhotos
WHERE ( (sexo = 'M') and (altura > '1.70'));


/*GROUP BY (AGRUPA E GERA UMA CONTAGEM DE GRUPO) */
SELECT carga FROM cursos
GROUP BY carga;

/*AGRUPAMENTO + AGREGAÇÃO   (AGRUPE POR CARGAS E CONTE OS NOMES)*/
SELECT
	carga as CARGA,
	COUNT(nome) as NOME
FROM
	cursos
GROUP BY carga;
/*SELECAO + CONTAGEM + AGREGAÇÃO*/
SELECT 
	totalaulas,
	COUNT(*) AS Cursos 
FROM
	cursos
GROUP BY
	totalaulas
ORDER BY 
	totalaulas;
/* SELECAO + CONTAGEM + AGREGAÇÃO + CONDIÇÃO*/
SELECT
	carga AS Carga,
	COUNT(*) AS Cursos
FROM
	cursos
WHERE
	carga > '10'
group by carga;
/* SELECAO + CONTAGEM + AGREGAÇÃO + CONDIÇÃO ( AONDE O CONTADOR E MAIOR Q 2)*/
/*AGRUPE AS PROFISSÃO CONTE CADA NOME QUE TENHA AQUELA PROFISSAO - SOMENTE AQUELAS QUE O CONTADOR FOR MAIOR QUE*/
/*ORDENE PELO NUMERO CONTADO*/
SELECT
	profissao,
	COUNT(nome)
FROM
	gafanhotos
GROUP BY
	profissao
HAVING COUNT(nome) > 0
ORDER BY count(nome);
/*SELECAO*/
SELECT
	peso,
	COUNT(*)
FROM
	gafanhotos
WHERE
	peso >= 60
GROUP BY
peso;
/*SELECAO ( MOSTRE UMA LISTA DE PROFISSAO COM OS NUMEROS DE PESSOAS QUE O PESO E MAIOR OU IGUAL A 70*/
SELECT
	profissao,
	COUNT(peso)
FROM
	gafanhotos
WHERE
	peso >= '70'
GROUP BY
	profissao
HAVING
	COUNT(peso) = 1;
/*SELECAO*/

	
	
/* FFFFOREIGNNNNNNNNNKEYYYYYY*/
ALTER TABLE
	gafanhotos
ADD
	cursopreferido int;
/*ADICIONA UMA FK NA TABELA GAFANHOTO TRAZENDO A REFERENCIA DE OUTRA TABELA (cursos 'idcurso') a ESTA FK*/
ALTER TABLE 
	gafanhotos
ADD	FOREIGN KEY
	(cursopreferido) 
REFERENCES 
	cursos(idcurso);
	
sp_help gafanhotos
	
select * from gafanhotos

update gafanhotos set cursopreferido = '6' where id = '6';

/* JUNCTIONNNNNNNNN | INNER JOIN UM PARA UM ! */
/* SELECIONA AS PESSOAS E OS CURSOS NO QUAIS ELAS ESTÃO RELACIONADAS UTILIZANDO A FK COMO REFERENCIA PARA TRAZSER O NOME E ANO DO CURSO */
select
	gafanhotos.nome, cursos.nome, cursos.ano
FROM
	gafanhotos
INNER JOIN
	cursos 
ON
	cursos.idcurso = gafanhotos.cursopreferido
ORDER BY
	gafanhotos.nome;

/* JUNCTION COM ALTER JOIN + RIGHT*/
SELECT
	gafanhotos.nome, cursos.nome, cursos.nome
FROM
	gafanhotos
LEFT OUTER JOIN 
	cursos
ON
	cursos.idcurso = gafanhotos.cursopreferido;

	/*JUNCTION PARA TABELAS DE MUITOS PARA MUITOS*/
	/*INSERT NA TABELA ENTRE MUITOS PARA MUITOS*/
INSERT INTO
	assiste
VALUES
('2014-03-01','1', '2'),
('2015-03-01','4', '5');


SELECT
	gafanhotos.nome, gafanhotos.id AS gafanhoto , assiste.id AS Curso, cursos.nome AS NOME_Curso
FROM
	gafanhotos
INNER JOIN
	assiste
on
	gafanhotos.id = assiste.idgafanhoto
INNER JOIN
	cursos
ON
	assiste.idcurso = cursos.idcurso;