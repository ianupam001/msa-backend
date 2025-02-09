const express = require("express");
const { searchPizza, searchJuice, searchCombo } = require("../controllers/searchController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Search
 *   description: API for searching pizza and juice shops
 */

/**
 * @swagger
 * /search/pizza:
 *   get:
 *     summary: Get a list of pizza places
 *     description: Fetches nearby pizza places from Yelp API.
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: "The city or address to search in. Default is 'San Francisco'."
 *     responses:
 *       200:
 *         description: A list of pizza places.
 */
router.get("/pizza", searchPizza);

/**
 * @swagger
 * /search/juice:
 *   get:
 *     summary: Get a list of juice places
 *     description: Fetches nearby juice places from Yelp API.
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: "The city or address to search in. Default is 'San Francisco'."
 *     responses:
 *       200:
 *         description: A list of juice places.
 */
router.get("/juice", searchJuice);

/**
 * @swagger
 * /search/combo:
 *   get:
 *     summary: Get a list of places offering both pizza and juice
 *     description: Fetches nearby places offering both pizza and juice from Yelp API.
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: "The city or address to search in. Default is 'San Francisco'."
 *     responses:
 *       200:
 *         description: A list of combo places.
 */
router.get("/combo", searchCombo);

module.exports = router;
