/* const express = require('express');
const app = express();

app.get('/ash', (request, response) => {
    response.send('Ash! Its so great to see you!');
});

app.listen(4000);
*/


const express = require('express');
const app = express();
let answer = Math.floor(200 * .18);

const port = 4000;

app.get('/tip/:200/:18', (request, response) => {
    response.send('The tip is $' + answer + '.');
});

app.listen(port, () => {
    console.log('Express is listening on port: ', port);
});