#!/usr/bin/env python3

from flask import request
from flask_restful import Resource, make_response
from config import app, db, api
from models import Volunteer, Organization, Opportunity

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

# Add CheckSession route
# Add login/logout routes
# Add before_request checkAuthorization
# Add before_request checkIfLoggedIn
# Add signup route with GET/POST
# Add profile route with GET/PATCH/DELETE

@app.route('/opportunities')
class Opportunities(Resource):
    def get(self):
        opportunity = Opportunity.query.all()
        opportunity_list = opportunity.to_dict()
        return make_response(opportunity_list, 200)
# add for opp in Opp in opportunity_list
# add POST method

class OpportunitiesById(Resource):
    def get(self, id):
        opportunity = Opportunities.query.filter_by(id=id).first()
        if opportunity:
            return make_response(opportunity.to_dict(), 200)
        else:
            return make_response({'error': 'Opportunity not found'}, 404)
        # Maybe change to db.session.get(Opportunities, id)

# class OpportunitiesRoute(Resource):
#     def post(self):
#         try:
#             data = request.get_json()
#             opportunity...
#                 name=
#                 description=
#                 location=
            


# class OrganizationById(Resource):
#     def get(self, id):
#         organization = Organization.query.all()
#         organization_list = organization.to_dict()
#         return make_response(organization_list, 200)
    
#     def delete(self, id):
#         organization = Organization.query.filter_by(id=id).first()
#         if organization:
#             db.session.delete(organization)
#             db.session.commit()
#             return make_response({"message": "Organization deleted successfully."}, 204)
#         else:
#             return make_response({"error": "Organization not found"}, 404)
    

# api.add_resource(Home, '/home')
# api.add_resource(Signup, '/signup')
# api.add_resource(Login, '/login')
# api.add_resource(Profile, '/profile')
# api/add_resource(Organization, '/organization')
# api.add_resource(OrganizationById, '/organization/<int:id>')
api.add_resource(Opportunities, '/opportunities')
api.add_resource(OpportunitiesById, '/opportunities/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

