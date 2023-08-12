import express from 'express';

function createServer() {
    // server
    const app = express();

    // middleware
    app.use(express.json());

    /**
     * @to-do
     * add routes
     * routes(app)
     */

    return app;
}

export default createServer;
