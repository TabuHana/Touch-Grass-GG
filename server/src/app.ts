// dep
import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import logger from './utils/logger';
import createServer from './utils/server';
import routes from './routes';
import connect from './utils/connect';

// variables
const port = config.get('port');

// init app
const app = createServer();

// start server
app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
    await connect();
});
