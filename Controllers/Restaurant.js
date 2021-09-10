const Restaurant = require('../Models/Restaurants');
const Items = require('../Models/items')

exports.getRestaurantsByLocations =(req, res) => {
    const locationId = req.params.locationId;
    Restaurant.find({ location_id : locationId })
    .then(response => {
        res.status(200).json({ message: "Restaurant Fetched Succesfully", restaurants: response })
    }).catch(err => {
        res.status(500).json({ error: err })
    })
}

exports.filterRestaurants = (req, res) => {
    const reqBody =req.body;

    const locationId = reqBody.locationId;
    const mealTypeId = reqBody.mealTypeId;
    const cuisineId = reqBody.cuisineId;
    const lcost = reqBody.lcost;
    const hcost = reqBody.hcost;
    const sort = reqBody.sort ? reqBody.sort : 1;
    const page = reqBody.page ? reqBody.page : 1;

    const itemsPerPage = 2;
    // const startIndex = page * countPerPage - countPerPage;
    // const endIndex = countPerPage - 1;
   const lastIndex = page * itemsPerPage;
   const firstIndex = lastIndex - itemsPerPage;

    let payload = {}; 

if(mealTypeId) {
        payload = { mealtype_id: mealTypeId }
    }

    if(mealTypeId && locationId) {
        payload = { mealtype_id: mealTypeId, location_id: locationId }
    }

    if (mealTypeId && lcost && hcost){
        payload = {
             mealtype_id: mealTypeId,
            min_price:{ $lte: hcost, $gte: lcost }
         }
    }

    if (mealTypeId && locationId && lcost && hcost) {
        payload = { 
        mealtype_id: mealTypeId,
        location_id: locationId, 
        min_price: { $lte: hcost, $gte: lcost }
    }
}

if(mealTypeId && cuisineId){
    payload = {
        mealtype_id: mealTypeId,
        cuisine_id: cuisineId
    }
}

if (mealTypeId && locationId && cuisineId){
    payload = { 
        mealtype_id: mealTypeId,
        location_id: locationId, 
        cuisine_id: cuisineId
    }
}

if (mealTypeId && cuisineId && lcost && hcost) {
    payload = { 
    mealtype_id: mealTypeId,
    cuisine_id: cuisineId, 
    min_price: { $lte: hcost, $gte: lcost }
}
}

if (mealTypeId && locationId && lcost && hcost && cuisineId) {
    payload = { 
    mealtype_id: mealTypeId,
    location_id: locationId, 
    min_price: { $lte: hcost, $gte: lcost },
    cuisine_id: cuisineId
}
}
    Restaurant.find(payload).sort({ min_price: sort})
    .then(response => {
    
    //const filteredResponse = response.slice(startIndex, endIndex+1);

    const currentRestuarant = response.slice(firstIndex, lastIndex);
        res.status(200).json({ message: "Restaurant Fetched Succesfully", restaurants : currentRestuarant })   
    })
    .catch(err => {
        res.status(500).json({ error: err })
    }) 
}

exports.getRestaurantDetailsById = (req, res) => {
    const restautantId = req.params.restaurantId;    //findById() returns objects
    Restaurant.findById(restautantId)                 // find() returns Array of objects
    .then(response => {
        res.status(200).json({ message: "Restaurant Fetched Succesfully", restaurant: response })
    }).catch(err => {
        res.status(500).json({ error: err })
    })
}

exports.getMenuItemsByRestaurants = (req, res) => {
    const restautantId = req.params.restaurantId;
    Items.find({ restaurantId: restautantId })
    .then(response => {
        res.status(200).json({ message: "Items Fetched Succesfully", Items: response})
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
}