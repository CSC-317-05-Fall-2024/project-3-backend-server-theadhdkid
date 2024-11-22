import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurants, getRestaurant } from './data/restaurants.js';
import apiRouter from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Mount API Router
app.use('/api', apiRouter);

// Routes

// Index page (homepage)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Attractions page (static HTML)
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// Restaurants page (dynamic EJS)
app.get('/restaurants', (req, res) => {
    // Use getRestaurants() instead of directly accessing restaurantData
    const restaurants = getRestaurants();
    res.render('restaurants', { restaurantData: restaurants });
});

// Individual restaurant details page
app.get('/restaurants/:id', (req, res) => {
    const restaurant = getRestaurant(req.params.id);
    if (restaurant) {
        res.render('restaurant-details', { restaurant });
    } else {
        res.status(404).send('Restaurant not found');
    }
});

// New restaurant form page (changed to use EJS)
app.get('/new-restaurant', (req, res) => {
    res.render('new-restaurant');
});

// Server listening
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});