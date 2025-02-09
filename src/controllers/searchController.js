const { fetchPlaces } = require("../services/yelpService");

const searchPizza = async (req, res) => {
    const location = req.query.location || "San Francisco";
    const places = await fetchPlaces("pizza", location);
    res.json(places);
};

const searchJuice = async (req, res) => {
    const location = req.query.location || "San Francisco";
    const places = await fetchPlaces("juice", location);
    res.json(places);
};

const searchCombo = async (req, res) => {
    const location = req.query.location || "San Francisco";
    const pizzaPlaces = await fetchPlaces("pizza", location);
    const juicePlaces = await fetchPlaces("juice", location);
    res.json([...pizzaPlaces, ...juicePlaces]);
};

module.exports = { searchPizza, searchJuice, searchCombo };
