import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import * as errorHandler from './middlewares/errorHandler';

let app = express();

const port = 7777;

app.set('port', port);
app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.json({ data: "Welcome to my api" });
});
app.use('/api',routes);

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFoundError);

app.listen(port, () => {
    console.log(`Node app is running on port, ${port}`);
});

