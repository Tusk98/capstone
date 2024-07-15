# %%
import pandas as pd 
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import pickle 
import os

# Load the encoders and model
model_loaded = pickle.load(open('./python/trained_model.pkl', 'rb'))

def predict_salary(job_role, work_location):     
    # Create a DataFrame for input
    df_input_data = pd.DataFrame({'job_role': [job_role], 'work_location': [work_location]})

    df_input_dummy = pd.get_dummies(df_input_data, columns=['job_role', 'work_location'], drop_first=True)
   
    df_input_dummy = df_input_dummy.reindex(columns=model_loaded.feature_names_in_, fill_value=0)

    # Make salary prediction
    model_prediction = model_loaded.predict(df_input_dummy)
    return model_prediction[0]

print("Enter your job role (Software, Hardware, Frontware, Backware, Middleware):")
job_role = input()
print("Enter your job location (WFH, Toronto, North Pole, South Pole):")
work_location = input()

predicted_salary = predict_salary(job_role, work_location)
print(f'The salary for a {job_role} in {work_location} is predicted to be ${predicted_salary:.2f}')



