const express = require('express');

const app = express();

app.all('/', (req, res) => {
    res.write('It is working');
    res.end();
});

app.listen(5000);