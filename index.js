var express = require('express');
const { imc, interpretIMC } = require('./imc');
var app = express();
app.get('/bmi', function (req, res) {

    const weight = req.query.weight;
    const height = req.query.height;
    const ImcRes = imc(weight, height);
    res.status(200).send({ "bmi": ImcRes });
});

app.get('/bmi/:n', function (req, res) {

    const input = req.params.n;
    console.log(parseFloat(input));
    const interpret = interpretIMC(parseFloat(input));
    res.status(200).send({ "interpretation": interpret });

});
app.listen(3000, function () {

    res.status(200);
    console.log('Listening to Port 3000');
});

