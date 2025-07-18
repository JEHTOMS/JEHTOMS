import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleProperties, sampleUsers } from '../data/sampleData';
import { 
  MapPin, Bed, Bath, Car, Square, Phone, Mail, MessageCircle, 
  Heart, Share2, Eye, CheckCircle, Home, Wifi, Shield, Zap 
} from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property] = useState(sampleProperties.find(p => p.id === id));
  const [users] = useState(sampleUsers);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Property Not Found</h2>
          <Link to="/properties" className="btn btn-primary">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

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

  const landlord = getUserById(property.landlord);
  const agent = property.agent ? getUserById(property.agent) : null;

  const getUtilityIcon = (utility) => {
    switch (utility) {
      case 'internet': return <Wifi className="w-4 h-4" />;
      case 'security': return <Shield className="w-4 h-4" />;
      case 'electricity': return <Zap className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="relative">
        <div className="h-96 bg-gray-200">
          <img
            src={property.images[currentImageIndex]?.url || property.images[0]?.url}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          {/* Image Navigation */}
          {property.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="btn btn-secondary btn-sm">
              <Heart className="w-4 h-4" />
            </button>
            <button className="btn btn-secondary btn-sm">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Property Status */}
          <div className="absolute top-4 left-4 flex space-x-2">
            {property.featured && (
              <span className="badge badge-yellow">Featured</span>
            )}
            {property.verified && (
              <span className="badge badge-accent">✓ Verified</span>
            )}
            <span className="badge badge-primary capitalize">{property.status}</span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        {property.images.length > 1 && (
          <div className="bg-white p-4 border-b">
            <div className="container mx-auto px-4">
              <div className="flex space-x-4 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location.address}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">
                    {formatPrice(property.price.amount)}
                  </div>
                  <div className="text-gray-500">per {property.price.period}</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center text-gray-600">
                  <Bed className="w-5 h-5 mr-2" />
                  <span>{property.features.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Bath className="w-5 h-5 mr-2" />
                  <span>{property.features.bathrooms} Bathrooms</span>
                </div>
                {property.features.parking > 0 && (
                  <div className="flex items-center text-gray-600">
                    <Car className="w-5 h-5 mr-2" />
                    <span>{property.features.parking} Parking</span>
                  </div>
                )}
                {property.features.size && (
                  <div className="flex items-center text-gray-600">
                    <Square className="w-5 h-5 mr-2" />
                    <span>{property.features.size}</span>
                  </div>
                )}
              </div>

              {/* Views */}
              <div className="flex items-center text-gray-500">
                <Eye className="w-4 h-4 mr-1" />
                <span>{property.views} views</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Property Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold">{property.features.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold">{property.features.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold">{property.features.toilets}</div>
                  <div className="text-sm text-gray-600">Toilets</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold">{property.features.parking}</div>
                  <div className="text-sm text-gray-600">Parking</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Square className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold">{property.features.size || 'N/A'}</div>
                  <div className="text-sm text-gray-600">Size</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold capitalize">{property.furnished}</div>
                  <div className="text-sm text-gray-600">Furnished</div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.slice(0, showAllAmenities ? property.amenities.length : 6).map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
              {property.amenities.length > 6 && (
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                  {showAllAmenities ? 'Show Less' : `Show All ${property.amenities.length} Amenities`}
                </button>
              )}
            </div>

            {/* Utilities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Utilities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(property.utilities).map(([utility, available]) => (
                  <div key={utility} className="flex items-center">
                    {available ? (
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
                    )}
                    <span className={`capitalize ${available ? 'text-gray-700' : 'text-gray-400'}`}>
                      {utility}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">House Rules</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  {property.rules.petsAllowed ? (
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-red-500 mr-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  )}
                  <span>Pets {property.rules.petsAllowed ? 'Allowed' : 'Not Allowed'}</span>
                </div>
                <div className="flex items-center">
                  {property.rules.smokingAllowed ? (
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-red-500 mr-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  )}
                  <span>Smoking {property.rules.smokingAllowed ? 'Allowed' : 'Not Allowed'}</span>
                </div>
                <div className="flex items-center">
                  {property.rules.partiesAllowed ? (
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-red-500 mr-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  )}
                  <span>Parties {property.rules.partiesAllowed ? 'Allowed' : 'Not Allowed'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              
              {/* Landlord Info */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${landlord?.name}&background=16a34a&color=fff`}
                    alt={landlord?.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold">{landlord?.name}</h3>
                    <p className="text-sm text-gray-600">
                      {agent ? 'Property Owner' : 'Landlord'}
                      {landlord?.isVerified && <span className="text-green-600 ml-1">✓ Verified</span>}
                    </p>
                  </div>
                </div>
                {landlord?.bio && (
                  <p className="text-sm text-gray-600 mb-3">{landlord.bio}</p>
                )}
              </div>

              {/* Agent Info */}
              {agent && (
                <div className="mb-6 border-t pt-4">
                  <div className="flex items-center mb-3">
                    <img
                      src={`https://ui-avatars.com/api/?name=${agent?.name}&background=2563eb&color=fff`}
                      alt={agent?.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold">{agent?.name}</h3>
                      <p className="text-sm text-gray-600">
                        Agent {agent?.isVerified && <span className="text-green-600 ml-1">✓ Verified</span>}
                      </p>
                    </div>
                  </div>
                  {agent?.bio && (
                    <p className="text-sm text-gray-600 mb-3">{agent.bio}</p>
                  )}
                </div>
              )}

              {/* Contact Buttons */}
              <div className="space-y-3">
                <a href={`tel:${property.contactInfo.phone}`} className="btn btn-primary w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call {property.contactInfo.phone}
                </a>
                <a href={`mailto:${property.contactInfo.email}`} className="btn btn-secondary w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
                {property.contactInfo.whatsapp && (
                  <a 
                    href={`https://wa.me/${property.contactInfo.whatsapp.replace(/[^\d]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                )}
              </div>

              {/* Quick Info */}
              <div className="mt-6 pt-6 border-t">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Property Type:</span>
                    <span className="font-medium capitalize">{property.propertyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium">{property.location.area}, {property.location.state}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-medium capitalize text-green-600">{property.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Safety Notice</h3>
              <p className="text-sm text-yellow-700">
                Always verify property details and meet in public places. Never send money without visiting the property first.
              </p>
            </div>

            {/* Report Listing */}
            <div className="text-center">
              <button className="text-sm text-gray-500 hover:text-gray-700">
                Report this listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;