function mockData(app) {
  app.get('/slider', (req, res) => {
    res.json([
      {
        url: 'http://www.didichuxing.com/',
        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
      },
      {
        url: 'http://www.didichuxing.com/',
        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
      },
      {
        url: 'http://www.didichuxing.com/',
        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
      },
    ]);
  });
}
module.exports = mockData;
