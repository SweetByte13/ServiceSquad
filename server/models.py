from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from flask.ext.bcrypt import Bcrypt

from config import db, app
bcrypt = Bcrypt(app)

# Models basics. HAVE NOT CREATED A DATABASE YET! 6/14
class Volunteer(db.Model, SerializerMixin):
    
    serialize_rules = ('-_password_hash',)
    
    __table_arg__ = (
        db.CheckConstraint('length(username) > 6', name='username_length_over_six'), db.CheckConstraint('length(phone_number) = 10 or len(phone_number) = 15', name='phone_number_length_ten'),
    ) 
    
    __tablename__ = 'volunteers'
    id=db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable = False)
    last_name = db.Column(db.String, nullable = False)
    email=db.Column(db.String, nullable=False)
    phone_number= db.Column(db.Integer, nullable=False)
    username=db.Column(db.String, unique=True, nullable=False)
    _password_hash=db.Column(db.String, unique=True, nullable=False)
    interests=db.Column(db.String)
    skills=db.Column(db.String)
    hours_wanted=db.Column(db.Integer)
    zipcode=db.Column(db.Integer)

    opportunities = db.relationship('Opportunity', back_populates='pizza', cascade='all, delete-orphan')
    organizations = db.association_proxy('opportunities', 'organization')
    
    def __repr__(self):
        return f"<Volunteer {self.id}: {self.name}, {self.username}, {self.email}, {self.phone_number}, {self.interests}, {self.skills}, {self.hours_wanted}, {self.zipcode}>"
    
    @property 
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password)
    
    @validates('name')
    def validates_name(self, key, new_name):
        if not new_name:
            raise ValueError("Name is required")
        return new_name
    
    @validates('email')    
    def validates_email(self, key, new_email):
        if not new_email:
            raise ValueError("Email is required")
        if '@' not in new_email:
            raise ValueError("Email must contain the @ symbol")
        if len(new_email) < 8:
            raise ValueError("Must be a valid email address")
        return new_email
        
    @validates('phone_number')
    def validates_phone_number(self, key, new_phone_number):
        if not new_phone_number:
            raise ValueError("Phone number is required")
        if len(new_phone_number) != 10 or len(new_phone_number) != 15:
            raise ValueError("Must be a valid phone number")
        return new_phone_number
    
    @validates('username')
    def validates_username(self, key, new_username):
        if not new_username:
            raise ValueError("Username is required")
        if len(new_username) < 6:
            raise ValueError("Username must be longer than 6 characters")
        if new_username == Volunteer.username:
            raise ValueError("Username must be unique")
        return new_username
        
    @validates('_password_hash')
    def validates_password(self, key, new_password):
        SpecialChar =['$', '@', '#', '%', '?', '!', '&', '^', '*', '<', '>']
        if not new_password:
            raise ValueError("Must have a password")
        if len(new_password) < 8:
            raise ValueError("Password must be longer than 8 characters")
        if not any(char.isdigit() for char in new_password):
            raise ValueError('Password should have at least one numeral')
        if not any(char in SpecialChar for char in new_password):
            raise ValueError("Password should have at least one of the symbols !?$@#&^*<>")
        return new_password

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