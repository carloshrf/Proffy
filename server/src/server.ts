import express from 'express';

const app = express(); 

app.use(express.json());

app.post('/users', (resquest, response) => {
  return response.json({fera: 'fera'});
});

app.listen(3333, () => {console.log('Server starts...')});