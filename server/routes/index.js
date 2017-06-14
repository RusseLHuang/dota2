const heroes = require('api/heroes');

const route = (app) => {
  app.use('/api/heroes',heroes);
}

export default route;
