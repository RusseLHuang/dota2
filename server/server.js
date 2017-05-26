const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const webpack = require('webpack');
const {config} = require('../webpack');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const port = process.env.PORT || 8868;
const compiler = webpack(config);
compiler.run((err,stats) => {
  if(stats.hasErrors()){
    const statsJson = stats.toJson();
    console.log(statsJson.errors)
    return err;
  }else{
    console.log('Webpack success')
  }
});

//require('./routes').default(app);

app.use(express.static(path.join(__dirname,'../public')));
app.use((req,res,next) => {

  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Cache-Control','no-cache');

  if(req.url.match(/\/api\.*/))
    next();
  else
    res.sendFile(path.join(__dirname,'../index.html'));
});

app.listen(port, (err) => {
  if(err) console.log(err)
  else console.log("Listening..."+port);
});
