import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import joblib

# Load the data
df = pd.read_json("generated_proj_data.json")

# Initialize the LabelEncoders
job_role_encoder = LabelEncoder()
work_location_encoder = LabelEncoder()

# Fit and transform the data
df['Job_role_encoded'] = job_role_encoder.fit_transform(df['Job_role'])
df['Work_location_encoded'] = work_location_encoder.fit_transform(df['Work_location'])

# Save the encoders
joblib.dump(job_role_encoder, 'job_role_encoder.joblib')
joblib.dump(work_location_encoder, 'work_location_encoder.joblib')

# Define features and target
X = df[['Job_role_encoded', 'Work_location_encoded']]
y = df['Salary']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'linear_regression_model.joblib')

# Evaluate the model
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)