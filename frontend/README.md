# Portfolio Project

This is a full-stack portfolio project consisting of a backend API and a React frontend application.

## Project Overview

- **Backend:** A Node.js and Express API server with MongoDB for data storage. It handles features such as comments and messages.
- **Frontend:** A React application built with Vite, featuring multiple pages and components to showcase projects, certificates, tech stack, and contact information. It uses Tailwind CSS for styling and includes animations and interactive UI elements.

## Backend

### Technologies Used

- Node.js
- Express
- MongoDB with Mongoose
- CORS 
- dotenv for environment variable management
- nodemon for development

### Setup and Run

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for environment variables (e.g., database connection string, JWT secret).
4. Start the server:
   - For development with auto-reload:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## Frontend

### Technologies Used

- React 19
- Vite build tool
- React Router DOM for routing
- Axios for API requests
- Tailwind CSS for styling
- Framer Motion for animations
- ESLint for linting

### Setup and Run

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`).

## Folder Structure

```
backend/
  ├── config/           # Database and environment configurations
  ├── controllers/      # API route controllers (comments, messages)
  ├── models/           # Mongoose models
  ├── routes/           # Express routes
  ├── server.js         # Entry point for backend server
frontend/
  ├── public/           # Static assets
  ├── src/
  │   ├── animation/    # Animation components
  │   ├── assets/       # Images and icons
  │   ├── components/   # React components (Navbar, Projects, Contact, etc.)
  │   ├── config/       # API configuration
  │   ├── pages/        # React pages (Home, ProjectDetail, etc.)
  │   ├── App.jsx       # Main React app component
  │   ├── main.jsx      # React app entry point
  │   └── index.css     # Global styles
  ├── package.json      # Frontend dependencies and scripts
  ├── vite.config.js    # Vite configuration
```

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the ISC License.
