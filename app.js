//global config
require("dotenv").config();

// packages
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load("./swagger.yaml");
const templateRoutes = require('./routes/template-routes');

const app = express();

//middleware
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());
app.use("/api/v1/", templateRoutes);

const { EXPRESS_PORT } = process.env;

app.get("/", (req, res) => {
    res.send(`<h1>Template App Running at ${EXPRESS_PORT}</h1>`);
});

module.exports = app;