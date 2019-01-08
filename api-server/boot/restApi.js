module.exports = function mountRestApi(app) {
  var restApiRoot = app.get('restApiRoot');
  console.log('> mountRestApi');
  app.use(restApiRoot, app.loopback.rest());
};
