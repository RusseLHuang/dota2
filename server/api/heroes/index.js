const express = require('express');
const router = express.Router();
const {getAllHeroes} = require('./controller/heroes.js');

router.get('/',getAllHeroes);

module.exports = router;
