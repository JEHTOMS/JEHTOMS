# Naija Rentals - House Rental Platform for Nigerians

A comprehensive house rental platform that connects landlords, agents, and tenants across Nigeria. Built with React, Node.js, Express, and MongoDB.

## Features

### For Tenants
- Browse available properties with advanced search filters
- Create apartment/house requests with detailed preferences
- View property details with photos and amenities
- Contact landlords and agents directly
- Save favorite properties
- Manage rental preferences

### For Landlords
- List properties with detailed descriptions and photos
- Manage property availability and pricing
- View and respond to tenant requests
- Track property views and inquiries
- Update property information

### For Agents
- Represent multiple landlords
- Manage multiple property listings
- Handle client inquiries
- Facilitate rental transactions

### Platform Features
- User authentication and authorization
- Role-based access control (Tenant, Landlord, Agent)
- Responsive design for mobile and desktop
- Real-time notifications
- Location-based search across Nigerian states
- Image upload and gallery
- Advanced filtering and search

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage (optional)

### Frontend
- **React 18** - Frontend framework
- **React Router v6** - Client-side routing
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Lucide React** - Icons
- **React Toastify** - Notifications

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd naija-rentals
   ```

2. **Install dependencies**
   ```bash
   npm run install-deps
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp server/.env.example server/.env
   ```
   
   Edit `server/.env` with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/naija-rentals
   JWT_SECRET=your-super-secret-jwt-key-here
   
   # Optional: Cloudinary for image uploads
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

4. **Start MongoDB**
   
   If using local MongoDB:
   ```bash
   mongod
   ```
   
   Or use MongoDB Atlas and update the MONGODB_URI in .env

5. **Run the application**
   
   Development mode (runs both client and server):
   ```bash
   npm run dev
   ```
   
   Or run separately:
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run client
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Properties
- `GET /api/properties` - Get all properties (with filters)
- `GET /api/properties/:id` - Get single property
- `POST /api/properties` - Create new property (landlords/agents)
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property
- `GET /api/properties/user/my-properties` - Get user's properties

### Requests (Tenant Ads)
- `GET /api/requests` - Get all tenant requests
- `GET /api/requests/:id` - Get single request
- `POST /api/requests` - Create new request (tenants)
- `PUT /api/requests/:id` - Update request
- `DELETE /api/requests/:id` - Delete request
- `POST /api/requests/:id/respond` - Respond to request (landlords/agents)

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `PUT /api/users/change-password` - Change password

## Database Schema

### User Model
- Name, email, password, phone
- User type (tenant, landlord, agent)
- Profile image, location, preferences
- Verification status

### Property Model
- Title, description, property type
- Price, location (state, city, area)
- Features (bedrooms, bathrooms, etc.)
- Amenities, images, utilities
- Owner (landlord/agent) references

### Request Model
- Title, description, budget range
- Preferred locations, property types
- Requirements, move-in date
- Tenant reference, responses from landlords

## Project Structure

```
naija-rentals/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Utility functions
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   └── package.json
└── README.md
```

## Development Status

This is a functional MVP with the following implemented:
- ✅ User authentication and registration
- ✅ Role-based access control
- ✅ Basic UI structure and navigation
- ✅ Database models and API endpoints
- ✅ Responsive design foundation

### Next Steps for Full Implementation
1. Complete property listing and search functionality
2. Implement image upload with Cloudinary
3. Build comprehensive request/response system
4. Add real-time notifications
5. Implement advanced search and filters
6. Add property image galleries
7. Build admin dashboard
8. Add payment integration
9. Implement messaging system
10. Add property verification system

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@naijarentals.com
- Phone: +234 800 RENTALS

---

**Built with ❤️ for Nigerian property seekers and providers.**
