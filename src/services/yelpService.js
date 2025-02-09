const axios = require("axios");

const YELP_API_URL = process.env.YELP_API_URL;
const API_KEY = process.env.YELP_API_KEY;

const fetchPlaces = async (term, location) => {
    try {
        const response = await axios.get(YELP_API_URL, {
            headers: { Authorization: `Bearer ${API_KEY}` },
            params: { term, location, limit: 10 },
        });
        return response.data.businesses.map((business) => ({
            name: business.name,
            address: business.location.address1,
            rating: business.rating,
            phone: business.phone,
        }));
    } catch (error) {
        console.error("Error fetching data from Yelp:", error.message);
        return [];
    }
};

module.exports = { fetchPlaces };
