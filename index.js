var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello Digital Ocean');
});



var port = 8080;
var host = 'APP_PRIVATE_IP_ADDRESS';

app.listen(port, host, function() {
    console.log(`Magic is happening on ${host}:${port}`);
});
