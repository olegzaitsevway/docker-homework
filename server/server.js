import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/get-hero-name/:id', (req, res) => {
  request(`http://localhost:3005/get?id=${req.params.id}`, (error, response, body) => { res.send(body); });
});

app.post('/add-hero', (req, res) => {
  request.post({ url: 'http://localhost:3005/set', form: req.body }, (err, httpResponse, body) => { res.send(body); });
});

export default app;
