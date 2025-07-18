# 🚀 Naija Rentals Deployment Guide

## 📋 Prerequisites

1. **GitHub Account** (for code hosting)
2. **MongoDB Atlas Account** (free database)
3. **Render Account** (free backend hosting)
4. **Netlify Account** (free frontend hosting)

## 🗄️ Step 1: Setup MongoDB Atlas (Free Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Create a database user
4. Get your connection string (replace `<password>` with your user password)
5. Whitelist all IPs (0.0.0.0/0) for development

**Example Connection String:**
```
mongodb+srv://username:password@cluster0.xyz.mongodb.net/naija-rentals?retryWrites=true&w=majority
```

## 🔧 Step 2: Deploy Backend to Render (Free)

1. **Push code to GitHub** (if not already done)
2. Go to [Render](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name:** `naija-rentals-api`
   - **Environment:** `Node`
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Instance Type:** `Free`

6. **Add Environment Variables:**
   ```
   NODE_ENV = production
   PORT = 5000
   MONGODB_URI = [Your MongoDB Atlas connection string]
   JWT_SECRET = [Generate a random 32+ character string]
   ```

7. Click "Create Web Service"
8. **Your backend URL will be:** `https://naija-rentals-api.onrender.com`

## 🌐 Step 3: Deploy Frontend to Netlify (Free)

### Option A: Direct GitHub Deploy
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure:
   - **Base directory:** `client`
   - **Build command:** `npm run build`
   - **Publish directory:** `client/build`

5. **Add Environment Variables:**
   ```
   REACT_APP_API_URL = https://naija-rentals-api.onrender.com/api
   GENERATE_SOURCEMAP = false
   ```

6. Deploy the site
7. **Your frontend URL will be:** `https://[random-name].netlify.app`

### Option B: Manual Deploy
1. Build the frontend locally:
   ```bash
   cd client
   REACT_APP_API_URL=https://naija-rentals-api.onrender.com/api npm run build
   ```
2. Drag the `client/build` folder to Netlify's deploy area

## 🔗 Step 4: Update API URL

Once backend is deployed, update the frontend environment:

1. **For Netlify:** Update environment variable:
   ```
   REACT_APP_API_URL = https://[your-render-url].onrender.com/api
   ```

2. **Redeploy frontend** to pick up the new API URL

## ✅ Step 5: Test Your Deployment

1. **Backend Health Check:**
   ```
   https://[your-render-url].onrender.com/
   ```
   Should return: `{"message":"Welcome to Naija Rentals API"}`

2. **Frontend Access:**
   ```
   https://[your-netlify-url].netlify.app
   ```

3. **Test Full Flow:**
   - Register a new user
   - Login
   - Create property (if landlord/agent)
   - Create request (if tenant)

## 🛠️ Alternative Deployment Options

### Backend Alternatives:
- **Railway:** Similar to Render, easy GitHub integration
- **Heroku:** Free tier available with some limitations
- **Vercel:** Good for serverless functions

### Frontend Alternatives:
- **Vercel:** Excellent React support
- **GitHub Pages:** Free static hosting
- **Firebase Hosting:** Google's hosting platform

### Database Alternatives:
- **MongoDB Atlas:** Free 512MB
- **PlanetScale:** Free MySQL alternative
- **Supabase:** PostgreSQL with real-time features

## 🔧 Local Development Setup

```bash
# Clone the repository
git clone [your-repo-url]
cd naija-rentals

# Install all dependencies
npm run install-deps

# Set up environment
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI and JWT secret

# Start development servers
npm run dev

# Access:
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

## 🐛 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Ensure backend CORS is configured for your frontend domain
   - Check API URL in frontend environment variables

2. **Database Connection:**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist settings
   - Ensure database user has proper permissions

3. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies are listed in package.json
   - Check build logs for specific errors

4. **API Not Responding:**
   - Verify backend deployment completed successfully
   - Check environment variables are set correctly
   - Monitor server logs for errors

### Free Tier Limitations:

- **Render:** May sleep after 15 minutes of inactivity
- **Netlify:** 100GB bandwidth/month
- **MongoDB Atlas:** 512MB storage
- **Cold starts:** First request may be slow

## 📞 Support

If you encounter issues:
1. Check the deployment logs
2. Verify environment variables
3. Test API endpoints individually
4. Check browser developer console for errors

---

**🎉 Once deployed, you'll have:**
- **Frontend:** Professional rental platform UI
- **Backend:** Complete REST API
- **Database:** Persistent data storage
- **Free hosting:** No monthly costs for basic usage