var express = require('express');
const { imc, interpretIMC } = require('./imc');
var app = express();
app.get('/imc', function (req, res) {

    const weight = req.query.weight;
    const height = req.query.height;
    const ImcRes = imc(weight, height);
    res.status(200).send({ "imc": ImcRes });
});

app.get('/imc/:n', function (req, res) {

    const input = req.params.n;
    console.log(parseFloat(input));
    const interpret = interpretIMC(parseFloat(input));
    res.status(200).send({ "result": interpret });

});
app.listen(8000, function () {
    console.log('Listening to Port 8000');
});

app.get('/metrics', function (req, res) {
    res.status(200).send({ "cpu": "xx%" })
});