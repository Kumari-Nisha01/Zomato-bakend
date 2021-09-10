const express = require('express');

const router = express.Router();

const locationController = require('../Controllers/location')
const mealTypeController = require('../Controllers/MealType')
const restaurantController = require('../Controllers/Restaurant')

router.get('/location', locationController.getLocation);
router.post('/addlocation',locationController.addLocation);
router.get('/meal', mealTypeController.getMealTypes);
router.get('/restaurantsbylocation/:locationId', restaurantController.getRestaurantsByLocations);
router.post('/filter', restaurantController.filterRestaurants);   //not working
router.get('/restaurantbyid/:restaurantId', restaurantController.getRestaurantDetailsById);
router.get('/itembyrestaurant/:restaurantId', restaurantController.getMenuItemsByRestaurants);

// login as post, find()
// signup as post, save()
// saveDetails/addOrder API as post, save(), for this make *order* collection in your DB

module.exports = router;
 