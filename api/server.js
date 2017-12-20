import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const heroes = [
  {
    id: 'Superman',
    name: 'Clark Kent',
    age: 28,
  },
  {
    id: 'Batman',
    name: 'Bruce Wayne',
    age: 35,
  },
  {
    id: 'IronMan',
    name: 'Tony Stark',
    age: 40,
  },
];

app.get('/get', (req, res) => {
  const { id } = req.query;
  const heroName = heroes.find(hero => (hero.id === id)).name;
  res.send(heroName);
});

export default app;
