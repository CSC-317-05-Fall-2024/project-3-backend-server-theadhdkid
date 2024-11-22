import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from '../data/restaurants.js';

const router = express.Router();

// GET all restaurants
router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.json(restaurants);
});

// GET single restaurant by ID
router.get('/restaurants/:id', (req, res) => {
    const restaurant = getRestaurant(req.params.id);
    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
});

// POST new restaurant
router.post('/restaurants', (req, res) => {
    const { name, phone, address, photo } = req.body;
    const newRestaurant = createRestaurant({
        name,
        phone,
        address,
        photo: photo || '/images/default-restaurant.jpg'
    });
    res.status(201).json(newRestaurant);
});

// DELETE restaurant
router.delete('/restaurants/:id', (req, res) => {
    const deleted = deleteRestaurant(Number(req.params.id));
    if (deleted) {
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
});

export default router;