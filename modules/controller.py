from flask import Flask, url_for, render_template
from service import MongoService

app = Flask(__name__)

class Controller:
    service = MongoService(app)
    
    def run(self):
        app.run(debug=True) 
        
    #Renders the plot with chart in browser
    @app.route("/chart")
    def index():
        return render_template('index.html')
    
    #Returns the data
    @app.route("/get")
    def get():
        return Controller.service.get()


