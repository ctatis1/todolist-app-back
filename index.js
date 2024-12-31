const app = require('./app');
const http = require('http');
const logger = require('./utils/logger');

const server = http.createServer(app);
  
server.listen(process.env.PORT, () => {
    logger.info(`Server running at ${process.env.PORT}`);
});