var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello Digital Ocean');
});


app.listen(80);
