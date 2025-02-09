```md
# MSA Backend Challenge

This project is a Node.js backend that integrates Express, GraphQL, and Swagger to fetch and display business listings from Yelp API based on user queries.

## Features

- Fetches pizza, juice, and combo places from Yelp API.
- Allows dynamic location search via query parameters in REST API and GraphQL arguments.
- Uses Swagger for API documentation.
- Implements GraphQL for flexible data fetching.
- Includes unit tests with Jest and Supertest.

## Tech Stack

- Node.js
- Express.js
- GraphQL (Apollo Server Express)
- Swagger (swagger-jsdoc & swagger-ui-express)
- Jest & Supertest (for testing)
- Axios (to call Yelp API)
- dotenv (to manage environment variables)

## Installation

### 1. Clone the repository
```sh

git clone https://github.com/ianupam001/msa-backend.git
cd msa-backend
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up environment variables
Create a `.env` file and add:
```
PORT=5000
YELP_API_KEY=your_yelp_api_key
YELP_API_URL=https://api.yelp.com/v3/businesses/search
```

### 4. Run the server
```sh
npm run dev
```
Server will start at:
- REST API: http://localhost:5000
- GraphQL Playground: http://localhost:5000/graphql
- Swagger Docs: http://localhost:5000/api-docs

## API Endpoints

### REST API (Express)

| Endpoint                             | Method | Description                        |
|-----------------------------------   |--------|------------------------------------|
| `/search/pizza?location=New York`    | GET    | Get pizza places in a location     |
| `/search/juice?location=Los Angeles` | GET    | Get juice places in a location     |
| `/search/combo?location=Chicago`     | GET    | Get both pizza and juice places    |


### GraphQL API
Use the GraphQL Playground at http://localhost:5000/graphql.

#### Query to get pizza places:
```graphql
query {
  searchPizza(location: "New York") {
    name
    address
    rating
    phone
  }
}
```

#### Query to get juice places:
```graphql
query {
  searchJuice(location: "Los Angeles") {
    name
    address
    rating
    phone
  }
}
```

#### Query to get both pizza and juice places:
```graphql
query {
  searchCombo(location: "Chicago") {
    name
    address
    rating
    phone
  }
}
```

## Swagger API Documentation
Swagger documentation is available at http://localhost:5000/api-docs.

### Example Swagger Definition:
```yaml
paths:
  /search/pizza:
    get:
      summary: Get pizza places
      parameters:
        - name: location
          in: query
          required: true
          schema:
            type: string
          description: The city or address to search in
      responses:
        200:
          description: List of pizza places
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    name:
                      type: string
                    address:
                      type: string
                    rating:
                      type: number
                    phone:
                      type: string
```

## Running Tests
```sh
npm test
```
Tests are written using Jest and Supertest to validate API responses.

## Project Structure
```
msa-backend/
│── src/
│   ├── routes/
│   │   ├── searchRoutes.js  # REST API routes
│   ├── controllers/
│   │   ├── searchController.js  # Handles search logic
│   ├── services/
│   │   ├── yelpService.js  # Fetches data from Yelp API
│   ├── graphql/
│   │   ├── typeDefs.js  # GraphQL schema
│   │   ├── resolvers.js  # GraphQL resolvers
│   ├── tests/
│   │   ├── search.test.js  # Unit tests
│   ├── app.js  # Express app setup
│── .env  # Environment variables
│── package.json  # Dependencies and scripts
```

## Deployment
To deploy the application:
1. Set up an environment on a cloud provider (AWS, Heroku, etc.).
2. Configure the `.env` variables.
3. Use `npm start` to launch the server.

```