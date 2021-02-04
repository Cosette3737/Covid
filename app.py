from flask import Flask, render_template, jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc
import datetime as dt
import pandas as pd


app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

@app.route('/')
def home():
    return render_template('base.html')

@app.route('/viz1')
def viz1():
    return render_template('viz1.html')

@app.route('/credits')
def credits():
    return render_template('credits.html')

@app.route('/covid_data', methods=['GET'])
def covid_data():
    #create engine to connect to SQL database
    engine = create_engine("postgresql://postgres:postgres@localhost/covid")
    #connect to SQL database
    connection = engine.connect()

    # creat dataframe of wins per country from database
    covid_data = pd.read_sql('SELECT * FROM covid;', connection)
    # convert dataframe to list of lists with header
    covid_data = covid_data.to_dict('index')

    return jsonify(covid_data)


if __name__ == '__main__':
    app.run(debug=True)