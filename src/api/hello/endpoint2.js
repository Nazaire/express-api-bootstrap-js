const sayHello = require('~/modules/greetings/sayHello');

module.exports = function (req, res) {
  res.status(200).send("I am endpoint2: " + sayHello("World"))
};