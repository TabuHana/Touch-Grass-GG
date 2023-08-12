import express from 'express';
import routes from '../routes';

function createServer() {
    // server
    const app = express();

    // middleware
    app.use(express.json());

    routes(app);

    return app;
}

export default createServer;
