function mockData(app) {
  app.get('/slider', (req, res) => {
    res.json([
      {
        url: 'https://time.geekbang.org/column/intro/254',
        image: 'https://static001.geekbang.org/resource/image/24/2e/240e5fba9d8d2a6e1b94125a9b98eb2e.jpg',
      },
      {
        url: 'https://j.youzan.com/AaH7UY',
        image: 'https://static001.geekbang.org/resource/image/fb/1b/fb9df99b41cd7732cce1d9d4c4b52d1b.png',
      },
      {
        url: 'https://time.geekbang.org/column/article/169721',
        image: 'https://static001.geekbang.org/resource/image/56/38/565e5723d67827f76c25910a3268b038.jpg',
      },
    ]);
  });
}
module.exports = mockData;
