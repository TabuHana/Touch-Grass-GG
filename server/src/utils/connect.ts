import mongoose from 'mongoose';
import config from 'config';
import logger from '../utils/logger';

async function connect() {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        logger.info('DB connected successfully');
    } catch (error: any) {
        logger.error('Failed to connect to DB');
        process.exit(1);
    }

    return mongoose.connect(dbUri);
}

export default connect;
