var express = require('express');
var app = express();

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.get('/', function (req, res) {
    res.send("Welocme!");
});

app.get('/about', function (req, res) {
    res.send("Its About Page!");
});

console.log('Backend is running on port 8080.')
app.listen(8080);