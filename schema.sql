CREATE VIEW infected AS
SELECT state, c.infected
FROM covid AS c; 
select * from infected;

CREATE VIEW mapdata AS
SELECT state, c.infected, c.population
FROM covid AS c; 
select * from infected;


SELECT state,((infected/population*100))  as inf_perc 
FROM mapdata;

SELECT * FROM covid;
SELECT * FROM mapdata;

CREATE VIEW bar1 AS
SELECT state, c.infected, c.tested
FROM covid AS c; 
select * from bar;

CREATE VIEW tested AS
SELECT state, c.tested, c.population
FROM covid AS c; 
select * from flu;

SELECT * FROM covid;

SELECT SUM(deaths)
FROM covid;



SELECT * FROM state_data;

SELECT  tested, population, 
       (tested/population * 100.0) AS Percent
FROM covid;
SELECT * FROM covid;

ALTER TABLE covid
ADD (Cast(tested AS FLOAT)/(Cast(population AS Float))*100) AS Percent:
FROM covid;

CREATE VIEW percent6 AS
SELECT state,  ROUND(Cast(infected AS FLOAT)/(Cast(tested AS Float))*100) AS Percentinfected, ROUND(Cast(tested AS FLOAT)/(Cast(population AS Float))*100) AS Percenttested
FROM covid;
SELECT * FROM  percent6; percent;