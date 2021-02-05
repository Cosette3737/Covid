CREATE TABLE covid (
    state VARCHAR PRIMARY KEY,
    tested INTEGER,
	infected INTEGER,
	deaths INTEGER,
	population INTEGER,
	pop_density INTEGER,
	gini INTEGER,
	icu_beds INTEGER,
	income INTEGER,
	GDP INTEGER,
	unemployment INTEGER,
	sex_ratio INTEGER,
	smoking INTEGER,
	flu_deaths INTEGER,
	REspiratory INTEGER,
	Physician INTEGER,
	Hospitals INTEGER,
	health_spending INTEGER,
	pollution INTEGER,
	airport INTEGER,
	temperature INTEGER,
	urban INTEGER,
	adolescent INTEGER,
	adult INTEGER,
	senior_citizen INTEGER,
	school_date VARCHAR
	);
	
	SELECT * FROM covid;