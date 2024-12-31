const logger = require('./logger');

const requestLogger = (req, res, next) => {
    let date = new Date();
    logger.info('Method:', req.method);
    logger.info('Path:  ', req.path);
    logger.info('Body:  ', req.body);
    logger.info('Date:  ', date.toISOString());
    logger.info('-------------------')
    next()
}

module.exports = { requestLogger };