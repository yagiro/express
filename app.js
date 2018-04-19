const express = require('express');
const config = require('./config');
const logger = require('./middlewares/logger');
const defaultHeaders = require('./middlewares/defaultHeaders');
const rootRouter = require('./routers/root');

const app = express();

const init = () => {
    app.use(logger);
    app.use(defaultHeaders);
    app.use('/root', rootRouter);
    app.use((req, res, next) => res.send('404 fallback.'));
};

const start = () => {
    init();
    app.listen(config.port, () => console.log(`express server is listening on port ${ config.port }`));
}

module.exports = {
    start: start
};