import random
import json

# Searchable Enterprise Directory 

names = ["James", "Robert", "Michael", "Mary", "Patricia", "Gennifer"]
job_titles = ["Software", "Hardware", "Frontware", "Backware", "Middleware"]
work_locale = ["WFH", "Toronto", "North Pole", "South Pole"]
NUM_ROWS = 1000 

OUTPUT_FILE = "generated_proj_data.json" 

def generate_job_data(i): 
    return {
        "Employee_id": i+1,
        "Manager_id": i+1, 
        "Managed": i+2, 
        "Name": random.choice(names), 
        "Phone_number": random.randint(1111111111, 9999999999), 
        "Job_role": random.choice(job_titles), 
        "Work_location": random.choice(work_locale), 
        "Salary": int(random.gauss(100000, 15000))
    }

data_rows = [generate_job_data(i) for i in range(NUM_ROWS)]

with open(OUTPUT_FILE, "w") as file:
    json.dump(data_rows, file, indent=4)

print("Data generation completed")
