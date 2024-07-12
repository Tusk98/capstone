import csv
import random
from datetime import datetime, timedelta
import json

# Searchable Enterprise Directory 

names = ["One", "Two", "Three", "Four", "Five"]
job_titles = ["Software", "Hardware", "Frontware", "Backware", "Middleware"]
work_locale = ["WFH", "Toronto", "North Pole", "South Pole"]
NUM_ROWS = 1000

OUTPUT_FILE = "generated_Proj_data.csv"

def generate_job_data():
    return {
        "Name": random.choice(names),
        "Phone_number": random.randint(1111111111, 9999999999),
        "Job_role": random.choice(job_titles),
        "Work_Location": random.choice(work_locale),
        "Salary": random.randint(5, 20) * 10000
    }

if __name__ == "__main__":
    with open(OUTPUT_FILE, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=["Name", "Phone_number", "Job_role", "Work_Location", "Salary"])
        writer.writeheader()
        for _ in range(NUM_ROWS):
            writer.writerow(generate_job_data())

    print(f"Data has been written to {OUTPUT_FILE}")
