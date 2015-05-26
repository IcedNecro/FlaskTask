from flask.ext.pymongo import PyMongo
from flask import render_template
import json

#DAO service for consuming data from MongoDB
class MongoService:
    def __init__(self, app):
        app.config['MONGO_DBNAME'] = 'test_db'
        self.mongo = PyMongo(app, config_prefix='MONGO')
     
    #Returns the list of top-20 the most populated cities
    def get(self):
        answer = self.mongo.db.cities.find().sort("pop",-1).limit(20)
        return json.dumps([a for a in answer])
        
