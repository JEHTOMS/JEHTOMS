import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleProperties } from '../data/sampleData';
import { MapPin, Bed, Bath, Car, Search, Filter, Eye } from 'lucide-react';

const Properties = () => {
  const [filters, setFilters] = useState({
    state: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    searchTerm: ''
  });

  const [properties] = useState(sampleProperties);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const filteredProperties = properties.filter(property => {
    return (
      (!filters.state || property.location.state.toLowerCase().includes(filters.state.toLowerCase())) &&
      (!filters.propertyType || property.propertyType === filters.propertyType) &&
      (!filters.minPrice || property.price.amount >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || property.price.amount <= parseInt(filters.maxPrice)) &&
      (!filters.bedrooms || property.features.bedrooms >= parseInt(filters.bedrooms)) &&
      (!filters.searchTerm || 
        property.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.location.area.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )
    );
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Available Properties</h1>
          <p className="text-xl text-green-100">Find your perfect home across Nigeria</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search by location or title..."
                className="form-input"
                value={filters.searchTerm}
                onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              />
            </div>
            
            <div>
              <select
                className="form-input form-select"
                value={filters.state}
                onChange={(e) => handleFilterChange('state', e.target.value)}
              >
                <option value="">All States</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Rivers">Rivers</option>
                <option value="Ogun">Ogun</option>
              </select>
            </div>

            <div>
              <select
                className="form-input form-select"
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="duplex">Duplex</option>
                <option value="bungalow">Bungalow</option>
                <option value="flat">Flat</option>
                <option value="studio">Studio</option>
              </select>
            </div>

            <div>
              <select
                className="form-input form-select"
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              >
                <option value="">Bedrooms</option>
                <option value="1">1+ Bedroom</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            <div>
              <input
                type="number"
                placeholder="Min Price (₦)"
                className="form-input"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              />
            </div>

            <div>
              <input
                type="number"
                placeholder="Max Price (₦)"
                className="form-input"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredProperties.length} of {properties.length} properties
          </p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Sort by: Newest</span>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
              className="property-card card block"
            >
              {/* Property Image */}
              <div className="relative">
                <img
                  src={property.images[0]?.url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'}
                  alt={property.title}
                  className="property-image"
                />
                <div className="absolute top-4 left-4">
                  <span className={`badge ${property.featured ? 'badge-yellow' : 'badge-primary'}`}>
                    {property.featured ? 'Featured' : property.propertyType}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {property.verified && (
                    <span className="badge badge-accent">✓ Verified</span>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded px-2 py-1 text-xs">
                  <Eye className="w-3 h-3 inline mr-1" />
                  {property.views}
                </div>
              </div>

              <div className="card-body">
                {/* Price */}
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {formatPrice(property.price.amount)}
                  <span className="text-sm text-gray-500 font-normal">/{property.price.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">
                    {property.location.area}, {property.location.city}, {property.location.state}
                  </span>
                </div>

                {/* Features */}
                <div className="flex items-center justify-between text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.features.bedrooms} bed</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.features.bathrooms} bath</span>
                  </div>
                  {property.features.parking > 0 && (
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.features.parking} parking</span>
                    </div>
                  )}
                </div>

                {/* Amenities Preview */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="badge badge-secondary text-xs">
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="badge badge-secondary text-xs">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>

                {/* Status */}
                <div className="flex justify-between items-center">
                  <span className={`badge ${
                    property.furnished === 'furnished' ? 'badge-primary' : 
                    property.furnished === 'semi-furnished' ? 'badge-accent' : 'badge-secondary'
                  }`}>
                    {property.furnished}
                  </span>
                  <span className="text-sm text-gray-500 capitalize">
                    {property.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search filters</p>
          </div>
        )}

        {/* Load More (for demo) */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-8">
            <button className="btn btn-secondary">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;