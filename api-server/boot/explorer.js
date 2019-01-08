module.exports = function mountLoopBackExplorer(app) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  var explorer;
  try {
    explorer = require('loopback-component-explorer');
  } catch (err) {
    // Print the message only when the app was started via `app.listen()`.
    // Do not print any message when the project is used as a component.
    app.once('started', function() {
      console.log(
        'Corra `npm install loopback-component-explorer` to enable ' +
        'the LoopBack explorer'
        );
      });
      return;
    }

/*     if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    } else {
      console.log('error');
    } */

    var restApiRoot = app.get('restApiRoot');
    var mountPath = '/db';

    console.log('> mountLoopBackExplorer');
    explorer(app, { basePath: restApiRoot, mountPath });
    app.once('started', function() {
      var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('REST API en %s%s', baseUrl, mountPath);
  });
};
