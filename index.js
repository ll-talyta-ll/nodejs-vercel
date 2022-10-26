import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({
      hello: 'hi',
    });
});

app.listen("4000", () => {
  console.log('SERVIDOR ESTA CONECTADO NA PORTA 3000');

});