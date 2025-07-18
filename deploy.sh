#!/bin/bash

echo "🚀 Naija Rentals Deployment Setup"
echo "================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Naija Rentals Platform"
fi

# Build frontend for production
echo "🔨 Building frontend for production..."
cd client
npm install
REACT_APP_API_URL=https://naija-rentals-api.onrender.com/api npm run build
cd ..

echo "✅ Setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Push this code to GitHub"
echo "2. Follow the deployment-guide.md instructions"
echo "3. Set up MongoDB Atlas (free)"
echo "4. Deploy backend to Render"
echo "5. Deploy frontend to Netlify"
echo ""
echo "📖 Full guide: ./deployment-guide.md"