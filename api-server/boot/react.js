module.exports = function(app) {
  console.log('> X');
  app.get('/programax', (req, res) => {
    res.render('', {layout: 'layout-react'});
  });
};
