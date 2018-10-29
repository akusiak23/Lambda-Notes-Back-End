const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');
const cors = require('cors');

const server = express();

server.use(express.json(), helmet(), cors());

server.use('/', routes);

function errorHandler(err, req, res, next) {
    console.log(err);
    switch (err.statusCode) {
        case 404:
            res.status(404).json({
                message: 'Request not found'
            });
            break;
        default:
            res.status(500).json({
                message: 'Something\'s not quite right'
            });
            break;
    }
}

server.use(errorHandler);

const port = process.env.PORT || 9000;

server.listen(port, () => {
    console.log(`\n=== Server listening on port ${port}\n`)
})