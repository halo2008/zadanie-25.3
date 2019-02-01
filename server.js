var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var stringifyFile;
app.use(bodyParser.json());

// app.get('/:id', function(req, res) {
//     console.log('Otrzymałem żądanie GET do strony głównej');
//     res.send('Hello GET!' + req.params.id);
//});

app.get('/getNote', function(req, res) {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  })
});

app.delete('/del_user', function (req, res) {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});

app.post('/updateNote/:note', function (req, res) {
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file updated');
  })
})

// app.use(function (req, res, next) {
//     res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
//});

app.listen(3000);
