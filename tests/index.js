const Logger = require('../src/index');
const logger = new Logger();
logger.warn('This is a warning');
logger.error('This is an error');
logger.success('This is a success');
logger.event('This is an event');
logger.info('This is an info');
logger.log('This is a log');