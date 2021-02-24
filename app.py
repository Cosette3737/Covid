from flask import Flask, render_template, jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc
import sqlalchemy.dialects.sqlite
import datetime as dt
import pandas as pd
import os


app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

@app.route('/')
def home():
    return render_template('viz1.html')

@app.route('/covid_data', methods=['GET'])
def covid_data():
    #create engine to connect to SQL database
    engine = create_engine("postgres://llnvzqitayvosz:0c1511137a621fdcc484c0a1afdccf84d1b10e28b5370f0af994ca3113fad4d8@ec2-3-213-85-90.compute-1.amazonaws.com:5432/d3livmv6adnqas")
    #connect to SQL database
    connection = engine.connect()

    # creat dataframe of wins per country from database
    covid_data = pd.read_sql('SELECT * FROM infected;', connection)
    print(covid_data)
    # convert dataframe to list of lists with header
    covid_data_list=[covid_data.columns.values.tolist()] \
        + covid_data.values.tolist()

    response = jsonify(covid_data_list)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/state_data', methods=['GET'])
def state_data():
    #create engine to connect to SQL database
    engine = create_engine("postgres://llnvzqitayvosz:0c1511137a621fdcc484c0a1afdccf84d1b10e28b5370f0af994ca3113fad4d8@ec2-3-213-85-90.compute-1.amazonaws.com:5432/d3livmv6adnqas")
    #connect to SQL database
    connection = engine.connect()

    # creat dataframe of wins per country from database
    state_data = pd.read_sql('SELECT * FROM percent6;', connection)

    print(state_data)

    
    state_data_list=[state_data.columns.values.tolist()] \
        + state_data.values.tolist()
    response = jsonify(state_data_list)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route('/filtered_data', methods=['GET'])
def filtered_data():
    #create engine to connect to SQL database
    engine = create_engine("postgres://llnvzqitayvosz:0c1511137a621fdcc484c0a1afdccf84d1b10e28b5370f0af994ca3113fad4d8@ec2-3-213-85-90.compute-1.amazonaws.com:5432/d3livmv6adnqas")
    #connect to SQL database
    connection = engine.connect()

    # creat dataframe of wins per country from database
    filtered_data = pd.read_sql('SELECT * FROM filtered_data;', connection)

    print(filtered_data)

    
    filtered_data_list=[filtered_data.columns.values.tolist()] \
        + filtered_data.values.tolist()
    response = jsonify(filtered_data_list)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)