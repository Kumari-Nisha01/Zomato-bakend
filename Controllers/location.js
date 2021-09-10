const Locations = require('../Models/Locations');

exports.getLocation = (req, res) => {
    Locations.find().then(response => {
        res.status(200).json({ message: "Location Fetched Succesfully", locations: response });
    }).catch(err => {
        res.status(500).json(err)
    })
}

exports.addLocation = (req, res) => {         //first we capture the data from req body
const reqBody = req.body;

const name = reqBody.name;
const city_id = reqBody.city_id;                 //then we create an object
const location_id = reqBody.location_id;
const city = reqBody.city;
const country_name = reqBody.country_name;

const locationData = new Locations({ name, city_id, location_id, city, country_name });      // store data in our database
locationData.save().then(response => {
    res.status(200).json({ message: "Location Data Inserted Succesfully", location: response })
}).catch(err => {
    res.status(500).json({message: "Location Data Not Inserted Succesfully", error: err})
})
}