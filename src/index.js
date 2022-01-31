const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//for exhibition of request data
app.use((req, res, next) => {
    console.log(req.method, req.url);
    console.log("Message body: ", req.body);
    next();
})

//for exhibition of query url params
app.use((req, res, next) => {
    console.log("query url params: ", req.query);
    next();
})

app.use(routes);

app.listen(3200);
