from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from flask.ext.bcrypt import Bcrypt
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, app
bcrypt = Bcrypt(app)

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
    interests=db.Column(db.String)
    skills=db.Column(db.String)
    hours_wanted=db.Column(db.Integer)
    zipcode=db.Column(db.Integer)

    opportunities = db.relationship('Opportunity', back_populates='pizza', cascade='all, delete-orphan')
    organizations = db.associatian_proxy('opportunities', 'organization')
    
    def __repr__(self):
        return f"<Volunteer {self.id}: {self.name}, {self.username}, {self.email}, {self.phone_number}, {self.interests}, {self.skills}, {self.hours_wanted}>"
    
    @property 
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password)
    
    #vaidate: must have name: email has @ in it: phone number length: username is unique, 6+ characters:password 8+, needs spec character and 2 #s
    
    @validates('name')
    def validates_name(self, key, new_name):
        if not new_name:
            raise ValueError("Name is required")
    
    @validates('email')    
    def validates_email(self, key, new_email):
        if '@' not in new_email:
            raise ValueError("Email must contain the @ symbol")
        
    @validates('phone_number')
    def validates_phone_number(self, key, new_phone_number):
            pass

class Organization(db.Model, SerializerMixin):

    __tablename__= 'organizations'
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, unique=True, nullable=False)
    website=db.Column(db.String)
    category=db.Column(db.String)

    opportunities = db.relationship('Opportunity', back_populates='organization', cascade='all, delete-orphan')
    volunteers=db.association_proxy('opportunities', 'volunteer')

    def __repr__(self):
        return f"<Organization {self.id}: {self.name}, {self.website}, {self.category}> "
    
    #validates: unique name, needs name: 

class Opportunity(db.Model, SerializerMixin):
    
    __tablename__= "opportunities"
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String, nullable=False)
    description=db.Column(db.String, nullable=False)
    remote_or_online=db.Column(db.Boolean)
    category=db.Column(db.String, nullable=False)
    dates=db.Column(db.String)
    duration=db.Column(db.String)
    organization_id=db.Column(db.Integer, nullable=False, ForeignKey=('organization.id'))
    volunteer_id=db.Column(db.Integer, ForeignKey=('volunteer.id'))

    volunteer = db.relationship('Volunteer', back_populates='volunteers')
    organization = db.relationship('Organization', back_populates='organizations')
    
    def __repr__(self):
        return f"<Opportunity {self.id}: {self.title}, {self.description}, remote:{self.remote_or_online}, {self.category}, {self.dates}, {self.duration}>"