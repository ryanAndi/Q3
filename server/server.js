const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname + '/../app/')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../app/index.html'));
});

app.listen(3000);
