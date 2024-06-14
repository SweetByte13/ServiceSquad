from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models basics. HAVE NOT CREATED A DATABASE YET! 6/14
class Volunteer(db.Model, SerializerMixin):
    
    serialize_rules = ('-_password_hash',)
    
    __tablename__ = 'volunteers'
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False)
    email=db.Column(db.String, nullable=False)
    phone_number= db.Column(db.Integer, nullable=False)
    username=db.Column(db.String, unique=True, nullable=False)
    _password_hash=db.Column(db.String, unique=True, nullable=False)
    bio=db.Column(db.String)
    hours_of_avaliablity=db.Column(db.Integer)
    years_of_experience=db.Column(db.Integer)

    opportunities = db.relationship('Opportunity', back_populates='pizza', cascade='all, delete-orphan')
    organizations = db.assossiatian_proxy('opportunities', 'organization')

class Organization(db.Model, SerializerMixin):

    __tablename__= 'organizations'
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, unique=True, nullable=False)

    opportunities = db.relationship('Opportunity', back_populates='organization', cascade='all, delete-orphan')
    volunteers=db.association_proxy('opportunities', 'volunteer')


class Opportunity(db.Model, SerializerMixin):
    
    __tablename__= "opportunities"
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String, nullable=False)
    bio=db.Column(db.String, nullable=False)
    organization_id=db.Column(db.Integer, nullable=False, ForeignKey=('organization.id'))
    volunteer_id=db.Column(db.Integer, ForeignKey=('volunteer.id'))


    volunteer = db.relationship('Volunteer', back_populates='volunteers')
    organization = db.relationship('Organization', back_populates='organizations')