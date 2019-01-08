// var path = require('path');

module.exports = function(app) {
  console.log('> Inicio');
  app.get('/', (req, res) => {
    res.render('index');
  });
};
