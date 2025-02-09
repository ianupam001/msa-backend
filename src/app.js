const express = require("express");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const searchRoutes = require("./routes/searchRoute");
const setupSwagger = require("./swagger");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

setupSwagger(app);

// REST API Routes
app.use("/search", searchRoutes);

// GraphQL Server
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    return app;
};

if (require.main === module) {
    startServer().then((app) => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
            console.log(`GraphQL Playground at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
}

module.exports = { app, startServer };
