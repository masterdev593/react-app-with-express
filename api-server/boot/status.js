var parseurl = require('parseurl');
var moment = require('moment');
var timeago = require('timeago.js');

// const timeagoInstance = timeago();

module.exports = function(app) {
  console.log('> Status');
  const started = new Date();
  const ahora = moment(new Date()).format('YYYY-MM-DD');
  const hace = timeago.format(new Date('01/01/2019'));
  const daysRunning = moment().diff(new Date('01/01/2019'), 'days');

  app.use(function(req, res, next) {
    if (!req.session.views) {
      req.session.views = {};
    }
    // get the url pathname
    var pathname = parseurl(req).pathname;

    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
  });

  app.get('/lb', app.loopback.status());

  app.get('/es', function(req, res) {
    const cont = req.session.views['/es'];
    const on = (Date.now() - Number(started)) / 1000;
    res.json({
      comienzo: started,
      ahora: ahora,
      hace: hace,
      diasCorriendo: daysRunning,
      vistaPagina: cont,
      cookies: req.secret,
      enLinea: on
    });
  });

  app.get('/test', function(req, res) {
    res.send('you viewed this page ' + req.session.views['/test'] + ' times ');
  });
};
