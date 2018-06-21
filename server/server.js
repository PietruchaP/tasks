const cors = require('cors');
const corsSettings = {
    origin: ['http://localhost:1841'],
    methods: ['POST'],
    allowedHeaders: ['*']
};
const express = require('express');
const bodyParser = require('body-parser');
const serverPort = 3001;

const app = express();

function onUserRequest(request, response) {
    const credentials = request.body;
    if (credentials.username === 'admin' && credentials.password === '123') {
        response.end(JSON.stringify({token:'1234567890'}));
    } else {
        response.sendStatus(401);
    }
}

app.use(cors(corsSettings));
app.use(bodyParser.json());
app.use(onUserRequest);

app.listen(serverPort, () => console.log(`Server is listening ${serverPort}`));