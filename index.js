var express = require('express');
const Prometheus = require('prom-client')


const metricsInterval = Prometheus.collectDefaultMetrics();
const test = new Prometheus.Counter({
  name: 'num_of_requests',
  help: 'Number of requests made',
  labelNames: ['method', 'route', 'code']
});

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
    res.status(200).send({ "result": interpret });

});

app.get('/metrics', async (req, res) => {
    const metrics = await Prometheus.register.metrics();
    res.set('Content-Type', Prometheus.register.contentType)
    res.end(metrics)
  });

// 
app.listen(3000, function () {
    console.log('Listening to Port 3000');
});

