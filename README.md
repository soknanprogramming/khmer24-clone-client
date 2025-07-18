# Khmer24 Clone Client

A React-based frontend application for a Khmer24 marketplace clone, built with Vite, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Homepage** - Main landing page with categories and advertisements
- 👤 **Authentication** - User registration and login system
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🗺️ **Location Services** - Interactive maps with Leaflet
- 📝 **Post Management** - Create and manage product listings
- 🏷️ **Categories** - Dynamic category and subcategory system
- 🔍 **Search & Filter** - Advanced filtering options
- 🌐 **Multi-language Support** - Khmer and English language options

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Maps**: Leaflet with React Leaflet
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd khmer24-clone-client
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Copy the required variables from `note/env-config.md`
   - Update `VITE_API_URL` to point to your backend server

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Environment Variables

### Required Variables

Create a `.env` file with the following variable:

```env
# API Configuration
VITE_API_URL=http://localhost:3000
```

For detailed environment configuration, see `note/env-config.md`.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── btn/           # Button components
│   └── ...
├── pages/             # Page components
│   ├── post/          # Post-related pages
│   └── ...
├── store/             # Zustand state management
├── types/             # TypeScript type definitions
├── func/              # Utility functions
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The application integrates with a backend API for:
- User authentication and registration
- Category and subcategory management
- Product listing and management
- Location services
- Component specifications (CPU, RAM, Storage, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please refer to the documentation or create an issue in the repository.
