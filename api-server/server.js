require('dotenv').load();

var _ = require('lodash'),
  loopback = require('loopback'),
  path = require('path'),
  boot = require('loopback-boot'),
  logger = require('./logger'),
  exphbs = require('express-handlebars'),
  expressState = require('express-state');
// var cors = require('cors');

var app = loopback();
var isBeta = !!process.env.BETA;

// NOTA: CORS es para compartir recursos entre origenes para propósitos de desarrollo del frontend.
/*   var whitelist = ['http://localhost:4000', 'http://localhost:5000'];
  var corsOptions = {
    origin: function(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('No permitido por CORS'));
    }
  }
}; */

process.env.PORT = 5000;

expressState.extend(app);
app.set('state namespace', '__app__');
app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  })
);
app.set('view engine', '.hbs');
console.log('> HSBD');
// app.use(cors(corsOptions));
app.use(loopback.token());
app.disable('x-powered-by');

boot(app, {
  appRootDir: __dirname,
  dev: process.env.NODE_ENV
});

console.log('> Seteando Passport');
// setupPassport(app);
console.log('> Passport OK');

app.start = _.once(function() {
  app.listen(app.get('port'), function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    logger.appStarted(app.get('port'), baseUrl, isBeta);
  });
});

module.exports = app;

// start the server if `$ node server.js`
// in production use `$npm start-production`
// or `$node server/production` to start the server
// and wait for DB handshake
if (require.main === module) {
  app.start();
}
