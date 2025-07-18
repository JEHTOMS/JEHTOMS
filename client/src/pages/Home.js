import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home as HomeIcon, Users, Shield, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Search,
      title: 'Easy Search',
      description: 'Find properties across Nigeria with our advanced search filters'
    },
    {
      icon: HomeIcon,
      title: 'Quality Listings',
      description: 'Verified properties from trusted landlords and agents'
    },
    {
      icon: Users,
      title: 'Connect Directly',
      description: 'Direct communication between tenants and property owners'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Safe and secure platform for all your rental needs'
    }
  ];

  const stats = [
    { label: 'Properties Listed', value: '10,000+' },
    { label: 'Happy Tenants', value: '25,000+' },
    { label: 'Trusted Landlords', value: '5,000+' },
    { label: 'Cities Covered', value: '36' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Home in Nigeria
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Connect with landlords, agents, and tenants across all 36 states
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/properties" className="btn btn-primary btn-lg">
              <Search className="w-5 h-5 mr-2" />
              Browse Properties
            </Link>
            <Link to="/requests" className="btn btn-secondary btn-lg text-white border-white hover:bg-white hover:text-green-600">
              View Tenant Requests
            </Link>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="form-input form-select text-gray-700">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Duplex</option>
                <option>Bungalow</option>
              </select>
              <select className="form-input form-select text-gray-700">
                <option>State</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Rivers</option>
                <option>Ogun</option>
              </select>
              <select className="form-input form-select text-gray-700">
                <option>Budget Range</option>
                <option>Under ₦500k</option>
                <option>₦500k - ₦1M</option>
                <option>₦1M - ₦2M</option>
                <option>Above ₦2M</option>
              </select>
              <Link to="/properties" className="btn btn-primary">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Naija Rentals?
            </h2>
            <p className="text-xl text-gray-600">
              The most trusted rental platform in Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Tenants */}
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">For Tenants</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Browse available properties</li>
                <li>• Create apartment requests</li>
                <li>• Connect with landlords</li>
                <li>• Schedule viewings</li>
              </ul>
            </div>

            {/* For Landlords */}
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">For Landlords</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• List your properties</li>
                <li>• Add photos and details</li>
                <li>• Review tenant requests</li>
                <li>• Connect with interested tenants</li>
              </ul>
            </div>

            {/* For Agents */}
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">For Agents</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Manage multiple properties</li>
                <li>• Represent landlords</li>
                <li>• Handle client inquiries</li>
                <li>• Facilitate rentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of Nigerians finding their perfect homes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn btn-primary btn-lg">
              Sign Up Today
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;