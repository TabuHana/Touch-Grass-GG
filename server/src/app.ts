// dep
import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import logger from './utils/logger';
import createServer from './utils/server';

// variables
const port = config.get('port');

// init app
const app = createServer();

// start server
app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
});
