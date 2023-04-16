const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;
const path = '/ola';

app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/teste', function(req, res){
    let body = req.body;

    body.nome = body.nome.toUpperCase();

    res.send(body);
})

app.get(path, function(req, res){
    let query = req.query;
    
    let result = {
        nome: query.nome,
        idadeUsuario: query.idade        
    }

    res.send(result);
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  