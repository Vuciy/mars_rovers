import express from 'express';
import BodyParser from "body-parser";
import fs from "fs";
import Rover from './rover';
const app = express();
const port = 3000;

app.use(BodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const rv = Rover('3 3 E', 'MMRMMRMRRM');
  res.sendFile('index.html', { root: './src/' });
});

app.post('/submit', (req, res) => {
  let position = 'Not found';
 // if (req.body.directions && req.body.commands) {
    position = Rover(req.body.directions, req.body.commands);
//  }
  res.send(`<h4>Rover Position: ${position}</h4>`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
