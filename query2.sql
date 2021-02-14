SELECT * FROM covid;

SELECT SUM(deaths)
FROM covid;

ALTER view filtered_data
DROP INDEX;

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
