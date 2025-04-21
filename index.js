// Import required modules using ES Module syntax
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';  // Ensure this has the `.js` extension

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use your auth routes
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Review App!');
});

// Set your server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
