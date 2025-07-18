import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleRequests, sampleUsers } from '../data/sampleData';
import { MapPin, Clock, AlertCircle, Eye, MessageSquare, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const Requests = () => {
  const [requests] = useState(sampleRequests);
  const [users] = useState(sampleUsers);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getUserById = (id) => {
    return users.find(user => user.id === id);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'fulfilled': return 'bg-blue-100 text-blue-800';
      case 'expired': return 'bg-gray-100 text-gray-800';
      case 'inactive': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tenant Requests</h1>
          <p className="text-xl text-blue-100">
            Browse apartment requests from potential tenants across Nigeria
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Info Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">How It Works</h2>
              <p className="text-gray-600">
                Tenants post their apartment requirements and landlords/agents can respond with suitable properties.
              </p>
            </div>
            <div className="hidden md:block">
              <Link to="/requests/create" className="btn btn-primary">
                Post Your Request
              </Link>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {requests.length} active requests
          </p>
          <div className="flex items-center gap-4">
            <select className="form-input form-select text-sm">
              <option>All Urgency Levels</option>
              <option>Urgent</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select className="form-input form-select text-sm">
              <option>All Locations</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Rivers</option>
            </select>
          </div>
        </div>

        {/* Requests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {requests.map((request) => {
            const tenant = getUserById(request.tenant);
            return (
              <Link
                key={request.id}
                to={`/requests/${request.id}`}
                className="request-card card block hover:shadow-lg transition-shadow"
              >
                <div className={`border-l-4 ${
                  request.urgency === 'urgent' ? 'border-red-500' :
                  request.urgency === 'high' ? 'border-orange-500' :
                  request.urgency === 'medium' ? 'border-blue-500' :
                  'border-green-500'
                }`}>
                  <div className="card-body">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {request.title}
                        </h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <img
                            src={`https://ui-avatars.com/api/?name=${tenant?.name}&background=16a34a&color=fff`}
                            alt={tenant?.name}
                            className="w-6 h-6 rounded-full mr-2"
                          />
                          <span>{tenant?.name}</span>
                          {tenant?.isVerified && (
                            <span className="text-green-600 ml-1">✓</span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`badge text-xs ${getUrgencyColor(request.urgency)}`}>
                          {request.urgency.toUpperCase()}
                        </span>
                        <span className={`badge text-xs ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="mb-4">
                      <div className="text-xl font-bold text-green-600">
                        {formatPrice(request.budget.min)} - {formatPrice(request.budget.max)}
                        <span className="text-sm text-gray-500 font-normal">/{request.budget.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {request.description}
                    </p>

                    {/* Location Preferences */}
                    <div className="mb-4">
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Preferred Locations:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {request.preferredLocation.states.map((state, index) => (
                          <span key={index} className="badge badge-secondary text-xs">
                            {state}
                          </span>
                        ))}
                        {request.preferredLocation.areas.slice(0, 2).map((area, index) => (
                          <span key={index} className="badge badge-accent text-xs">
                            {area}
                          </span>
                        ))}
                        {request.preferredLocation.areas.length > 2 && (
                          <span className="badge badge-secondary text-xs">
                            +{request.preferredLocation.areas.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Property Types */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-1">Looking for:</div>
                      <div className="flex flex-wrap gap-1">
                        {request.propertyType.map((type, index) => (
                          <span key={index} className="badge badge-primary text-xs">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Min Bedrooms:</span> {request.requirements.minBedrooms}
                        </div>
                        <div>
                          <span className="font-medium">Min Bathrooms:</span> {request.requirements.minBathrooms}
                        </div>
                      </div>
                    </div>

                    {/* Move-in Date */}
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        Move-in: {format(new Date(request.moveInDate), 'MMM dd, yyyy')}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {request.views} views
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {request.responses.length} responses
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {format(new Date(request.createdAt), 'MMM dd')}
                      </div>
                    </div>

                    {/* Response Preview */}
                    {request.responses.length > 0 && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-800">
                          <MessageSquare className="w-4 h-4 inline mr-1" />
                          Latest response from landlord
                        </div>
                        <p className="text-sm text-green-700 mt-1 line-clamp-2">
                          {request.responses[request.responses.length - 1].message}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Are you a tenant looking for a place?</h3>
            <p className="text-gray-600 mb-6">
              Create your apartment request and let landlords find you!
            </p>
            <Link to="/requests/create" className="btn btn-primary btn-lg">
              Post Your Request
            </Link>
          </div>
        </div>

        {/* Landlord CTA */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Landlords & Agents</h3>
            <p className="mb-6">
              Find qualified tenants who are actively looking for properties in your area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn btn-secondary">
                Join as Landlord
              </Link>
              <Link to="/properties/create" className="btn btn-primary bg-white text-green-600 border-white hover:bg-gray-100">
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;