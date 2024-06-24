const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/goodbye', (req, res) => {
    res.send({ message: 'Goodbye, World!' });
});

app.get('/api/echo/:input', (req, res) => {
    res.send({ echo: req.params.input });
});

app.post('/api/data', express.json(), (req, res) => {
    res.send({ received: req.body });
});

app.put('/api/update', express.json(), (req, res) => {
    res.send({ updated: req.body });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
