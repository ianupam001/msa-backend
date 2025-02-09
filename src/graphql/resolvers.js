const { fetchPlaces } = require("../services/yelpService");

const resolvers = {
    Query: {
        searchPizza: async (_, { location }) => await fetchPlaces("pizza", location),
        searchJuice: async (_, { location }) => await fetchPlaces("juice", location),
        searchCombo: async (_, { location }) => [
            ...(await fetchPlaces("pizza", location)),
            ...(await fetchPlaces("juice", location)),
        ],
    },
};

module.exports = resolvers;
