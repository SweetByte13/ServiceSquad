#!/usr/bin/env python3

from random import randint, choice as rcfrom faker import Faker
import requests
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = '<your_database_uri>'
db = SQLAlchemy(app)

class Volunteer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    email = db.Column(db.String(100))

@app.cli.command('seed_db')
def seed_db():
    print("Starting seed...")

    # Make a request to the Volunteer Connector API
    response = requests.get('https://www.volunteerconnector.org/api/search/')
    if response.status_code == 200:
        data = response.json()
    else:
        print("Failed to retrieve data from the API")
        exit(1)

    # Seed the database with the retrieved data
    for item in data:
        opportunity = Opportunity(organization_name=item['organization_name'], organization_email=item['organization_email'])
        db.session.add(opportunity)
        db.session.commit()

    print("Seeding completed successfully!")

if __name__ == '__main__':
    app.run()




#        #!/usr/bin/env python3

# # Standard library imports
# from random import randint, choice as rc

# # Remote library imports
# from faker import Faker

# # Local imports
# from app import app
# from models import db

# if __name__ == '__main__':
#     fake = Faker()
#     with app.app_context():
#         print("Starting seed...")
#         # Seed code goes here!
