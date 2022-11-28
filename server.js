/* Greetings

const express = require('express');
const app = express();

app.get('/ash', (request, response) => {
    response.send('Ash! Its so great to see you!');
});

app.listen(4000);

*/





/* Tip Calculator

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

*/




/*

// Magic 8 Ball

const express = require('express');
const app = express();
const magicQuestion = '<h1>Will I be a Millionaire?</h1>';

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (request, response) => {

    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)]; // returns random array value
    };

    const items = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];




    response.write(magicQuestion);
    response.write(" ");
    response.write(random_item(items));
    response.end();
    // response.write allows us multiple values to be displayed in the browser. response.send can only be used once. follow response.write() with response.end()
})


app.listen(4000, () => {
    console.log('Express is listening on port 4000');
})

*/




// Take One Down & Pass It Around

const express = require('express');
const app = express();


const port = 4000;


app.get('/', (request, response) => {
    response.send('99 bottles of beer on the wall');

});


app.listen(4000, () => {
    console.log('Express is listening on port ', port);
});