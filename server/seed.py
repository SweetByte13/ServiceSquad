#!/usr/bin/env python3

from random import randint, choice as rc
from faker import Faker
from flask import request, make_response
from config import db, app
from models import Opportunity, Organization, Volunteer


fake = Faker()

def generate_phone_number():
    allowed_lengths = [10, 12, 15, 17]
    length = rc(allowed_lengths)
    return "".join([str(randint(0, 9)) for _ in range(length)])
    
def create_volunteers():
    print("Creating volunteers...")
    volunteers = []
    list_of_domains = ('com', 'com.br', 'net', 'net.br', 'org', 'org.br', 'gov', 'gov.br')
    for _ in range(10):
        first_name = fake.first_name()
        last_name = fake.last_name()
        company = fake.company().split()[0].strip(',')
        dns_org = rc(list_of_domains)
        email = f"{first_name}.{last_name}@{company}.{dns_org}".lower()
        v = Volunteer(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone_number=generate_phone_number(),
            username=fake.user_name().ljust(6,"1"),
            _password_hash=fake.password()+'!',
            interests=fake.sentence(),
            skills=fake.sentence(),
            hours_wanted=fake.sentence(),
            zipcode=fake.zipcode()
        )
        volunteers.append(v)
    return volunteers
   
def create_organizations():
    print("Creating organizations...")
    organizations = []
    categories = ['Education', 'Health', 'Environment', 'Legal', 'Finance', 'Arts']
    for _ in range(10):
        name = fake.unique.company()
        o = Organization(
        name = name,
        website = fake.url(),
        category = rc(categories),
        )
        organizations.append(o)
    return organizations



def create_opportunities(organizations,volunteers):
    print("Creating opportunities...")
    opportunities = []
    titles=[]
    categories = ['Education', 'Health', 'Environment', 'Legal', 'Finance', 'Arts']
    for _ in range(10):
        title = fake.unique.job()
        o = Opportunity(
        title = title,
        description = fake.paragraph(),
        remote_or_online = fake.boolean(),
        category = rc(categories),
        dates=fake.date_between(start_date='-1y', end_date='today').strftime("%m/%d/%Y"),
        duration=fake.date_between(start_date='-1y', end_date='today').strftime("%m/%d/%Y")+" "+fake.date_between(start_date='-1y', end_date='today').strftime("%m/%d/%Y"),
        organization_id=rc([org.id for org in organizations]),
        volunteer_id=rc([vol.id for vol in volunteers])
        )
        opportunities.append(o)
    return opportunities


def clear_database():
    with app.app_context():
        print("Deleting all records...")
        Opportunity.query.delete()
        Organization.query.delete()
        Volunteer.query.delete()
        db.session.commit()

def seed_database():
    with app.app_context():
        print("Clearing db...")
        Volunteer.query.delete()
        Organization.query.delete()
        Opportunity.query.delete()
    
        print("Seeding volunteers...")
        volunteers = create_volunteers()
        db.session.add_all(volunteers)
        db.session.commit()
        
        print("Seeding organizations...")
        organizations = create_organizations()
        db.session.add_all(organizations)
        db.session.commit()
        
        print("Seeding opportunities...")
        opportunities = create_opportunities(organizations, volunteers)
        db.session.add_all(opportunities)
        db.session.commit()
        
if __name__ == '__main__':
    seed_database()

# @app.cli.command('seed_db')
# def seed_db():
#     print("Starting seed...")

#     # Make a request to the Volunteer Connector API
#     response = request.get('https://www.volunteerconnector.org/api/search/')
#     if response.status_code == 200:
#         data = response.json()
#     else:
#         print("Failed to retrieve data from the API")
#         exit(1)

# #     # Seed the database with the retrieved data
# #     for item in data:
# #         opportunity = Opportunity(organization_name=item['organization_name'], organization_email=item['organization_email'])
# #         db.session.add(opportunity)
# #         db.session.commit()

# #     print("Seeding completed successfully!")
