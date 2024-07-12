import random
import json

# Searchable Enterprise Directory 

names = ["One", "Two", "Three", "Four", "Five"]
job_titles = ["Software", "Hardware", "Frontware", "Backware", "Middleware"]
work_locale = ["WFH", "Toronto", "North Pole", "South Pole"]
NUM_ROWS = 1000 

OUTPUT_FILE = "generated_proj_data.json" 
count = 0

def generate_job_data(): 
    count += 1 
    return {
        "Employee_id": count,
        "Name": random.choice(names), 
        "Phone_number": random.randint(1111111111, 9999999999), 
        "Job_role": random.choice(job_titles), 
        "Work_location": random.choice(work_locale), 
        "Salary": random.randint(5, 20) * 10000
    }

data_rows = [generate_job_data() for _ in range(NUM_ROWS)]

with open(OUTPUT_FILE, "w") as file:
    json.dump(data_rows, file, indent=4)

print("Data generation completed")
