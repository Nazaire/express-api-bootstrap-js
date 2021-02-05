/**
 * Register the ~ shortcut to the src directory
 */
require("module-alias/register");
const moduleAlias = require("module-alias");

moduleAlias.addAliases({
  "~": __dirname,
});

/**
 * Import variables from a .env file
 */
const dotenv = require('dotenv')
dotenv.config();


const startServer = require('./server');

startServer();