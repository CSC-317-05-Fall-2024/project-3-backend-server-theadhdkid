// Initialize restaurant data with IDs
let restaurantData = [
    {
        id: 0,
        name: "Sorn",
        phone: "123-456-7890",
        address: "123 Main St, Bangkok",
        photo: "/images/sorn.jpg"
    },
    {
        id: 1,
        name: "Sawaan",
        phone: "098-765-4321",
        address: "456 Oak St, Bangkok",
        photo: "/images/sawaan.jpg"
    },
    {
        id: 2,
        name: "Nusara",
        phone: "111-222-3333",
        address: "789 Pine St, Bangkok",
        photo: "/images/nusara.jpg"
    },
    {
        id: 3,
        name: "Haoma",
        phone: "789-985-4598",
        address: "101 River View, Bangkok",
        photo: "/images/haoma.jpg"
    },
    {
        id: 4,
        name: "Khao",
        phone: "789-785-8888",
        address: "303 Night Bazaar, Bangkok",
        photo: "/images/khao.jpg"
    },
    {
        id: 5,
        name: "Maze",
        phone: "456-789-1234",
        address: "202 Skyline Ave, Bangkok",
        photo: "/images/maze.jpg"
    }
];

// Helper function to get the next available ID
const getNextId = () => {
    return restaurantData.reduce((maxId, restaurant) => {
        return Math.max(maxId, restaurant.id);
    }, -1) + 1;
};

// Get all restaurants
const getRestaurants = () => {
    return restaurantData;
};

// Get a specific restaurant by ID
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === Number(id));
};

// Create a new restaurant
const createRestaurant = (newRestaurant) => {
    const restaurantWithId = {
        id: getNextId(),
        ...newRestaurant
    };
    restaurantData.push(restaurantWithId);
    return restaurantWithId;
};

// Delete a restaurant
const deleteRestaurant = (id) => {
    const initialLength = restaurantData.length;
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== Number(id));
    return initialLength !== restaurantData.length;
};

// Export everything we need
export {
    restaurantData as default,
    getRestaurants,
    getRestaurant,
    createRestaurant,
    deleteRestaurant
};