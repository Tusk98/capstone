import csv
import random
from datetime import datetime, timedelta
import json

# Searchable Enterprise Directory 

job_titles = ["Software", "Hardware", "Frontware", "Backware", "Middleware"]
work_locale = ["WFH", "Toronto", "North Pole", "South Pole"]
NUM_ROWS = 1000 

OUTPUT_FILE = "generated_Proj_data.csv" 

def generate_job_data(): 
    return { 
        "Name": "AAAA", 
        "Phone_number": "123456789", 
        "Job_role": random.choice(job_titles), 
        "Work_Location": random.choice(work_locale), 
        "Salary": "10000000000"
    }

