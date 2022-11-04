const express = require('express');
const app = express();

app.get('/ash', (request, response) => {
    response.send('Ash! Its so great to see you!');
});

app.listen(4000);