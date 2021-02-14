CREATE VIEW infected AS
SELECT state, c.infected
FROM covid AS c; 
select * from infected;

SELECT state,((c.infected/c.population*100)) as inf_perc
c 
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
