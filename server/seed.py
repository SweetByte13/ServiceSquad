#!/usr/bin/env python3

from random import randint, choice as rc 
from faker import Faker
from flask import request, make_response
from flask_sqlalchemy import SQLAlchemy
from config import db, app
from models import Opportunity


@app.cli.command('seed_db')
def seed_db():
    print("Starting seed...")

    # Make a request to the Volunteer Connector API
    response = request.get('https://www.volunteerconnector.org/api/search/')
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
