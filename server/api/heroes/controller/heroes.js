const path = require('path');
const list = require('config/heroes.js');

exports.getAllHeroes = (req,res) => {
  let result = {"status" : "success", "data" : list}
  res.status(200).json(result);
};
