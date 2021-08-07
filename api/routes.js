const express    = require('express');
const bodyParser = require('body-parser');

const app       = express();
const db        = require("./db");

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/getCity', async (req, res) => {
  const City  = db.Mongoose.model('city', db.CitySchema, 'city');
  const ret   = await City.find({}).lean().exec();

  res.json(ret);
});

app.post('/cep', async (req, res) => {
  const newCep = req.body.cep;
  const idCity = req.body.idCity;

  let valid = validaCep(newCep);
  if (!valid.status) {
    res.status(400).end(valid.err); return;
  } else if (!idCity) {
    res.status(400).end('Preencha a cidade!'); return;
  } else {
    const City = db.Mongoose.model('city', db.CitySchema, 'city');
    const city = await City.findOne({ _id: idCity });
    city.ceps.push({ 'cep': newCep });
    try {
      await city.save();
      res.status(200).end();
    } catch (err) {
      res.status(400).end(err);
    }
  }
});

app.post('/city', async (req, res) => {
  const cityName = req.body.name;
  
  if (!cityName) {
    res.status(400).end('Preencha o nome da cidade'); return;
  } else {
    const City = db.Mongoose.model('city', db.CitySchema, 'city');
    const city = new City({ "name": cityName });

    try {
      await city.save();
      res.status(200).end();
    } catch (err) {
      res.status(400).end(err);
    }
  }
});

function validaCep(cep) {
  let ret = { status: false }
  if (!cep) {
    ret.err = 'Preencha o cep!';
    return ret;
  }

  cep = parseInt(cep);
  if (cep <= 100000 || cep >= 999999) {
    ret.err = 'O cep deve estar entre 100000 e 999999!';
    return ret;
  }

  cep = cep.toString();
  for (let i = 0; i < cep.length - 2; i++) {
    if (cep[i] == cep[i + 2]) {
      ret.err = `Há um par alternado de ${cep[i]}!`;
      return ret;
    }
  }

  ret.status = true;
  return ret;
}

module.exports = app;