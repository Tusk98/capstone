from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import pandas as pd 
import pickle 
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model
model_loaded = pickle.load(open('./trained_model.pkl', 'rb'))

def predict_salary(job_role, work_location):     
    df_input_data = pd.DataFrame({'job_role': [job_role], 'work_location': [work_location]})
    df_input_dummy = pd.get_dummies(df_input_data, columns=['job_role', 'work_location'], drop_first=True)
    df_input_dummy = df_input_dummy.reindex(columns=model_loaded.feature_names_in_, fill_value=0)

    model_prediction = model_loaded.predict(df_input_dummy)
    #return model_prediction[0]
    return random.gauss(100000, 15000)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    job_role = data.get('job_role')
    work_location = data.get('work_location')
    
    predicted_salary = predict_salary(job_role, work_location)
    
    return jsonify({'predicted_salary': predicted_salary})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
