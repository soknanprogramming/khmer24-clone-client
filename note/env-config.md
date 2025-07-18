# Environment Variables Configuration

## Required Environment Variables

Create a `.env` file in the root directory with the following variable:

```env
# API Configuration
VITE_API_URL=http://localhost:3000
```

## Optional Environment Variables

You can add these if needed for future features:

```env
# Google Maps API (for location features)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Analytics
VITE_ANALYTICS_ID=your_analytics_id_here

# Error Tracking
VITE_SENTRY_DSN=your_sentry_dsn_here

# Database Configuration (for future backend integration)
DATABASE_URL=your_database_url_here

# Authentication
JWT_SECRET=your_jwt_secret_here
SESSION_SECRET=your_session_secret_here
```

## Current Usage in Code

The following files use environment variables:

- `src/store/useUser.ts` - Uses `VITE_API_URL` for authentication endpoints
- `src/store/useComponents.ts` - Uses `VITE_API_URL` for component API calls
- `src/store/useCategories.tsx` - Uses `VITE_API_URL` for category API calls
- `src/store/useSellRequirements.ts` - Uses `VITE_API_URL` for requirements API calls
- `src/pages/RegisterPage.tsx` - Uses `VITE_API_URL` for registration
- `src/pages/Home.tsx` - Uses `VITE_API_URL` for image URLs
- `src/pages/post/components/LocationPopup.tsx` - Uses `VITE_API_URL` for location API

## Setup Instructions

1. Create a `.env` file in the root directory
2. Copy the required variables from above
3. Update the `VITE_API_URL` to point to your backend server
4. Restart your development server after adding the `.env` file

## Notes

- All Vite environment variables must be prefixed with `VITE_` to be accessible in the client-side code
- The `.env` file is already in `.gitignore` to keep sensitive data out of version control
- Make sure your backend server is running on the URL specified in `VITE_API_URL` 