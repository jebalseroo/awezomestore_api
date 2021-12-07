"use strict";

const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./environment/.env.${env}` });

const cors = require("cors");

const { stitchSchemas } = require("@graphql-tools/stitch");
const express = require("express");
const gqlMiddleware = require("express-graphql");

const ProductSchema = require('./src/microservices/product');
const PurchasesSchema = require('./src/microservices/purchases');

const schema = stitchSchemas({
  subschemas: [
    { schema: ProductSchema, batch: true },
    { schema: PurchasesSchema, batch: true },
  ],
});

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(
  "/api",
  gqlMiddleware({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
