const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');

const port = process.env.PORT || 1337;
const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.json({
        message: "hello world"
    })
});

app.use(middlewares.errorNotFound)
app.use(middlewares.errorHandler);

app.listen(port, () => {

    console.log(`listening at http://localhost:${port}`);

});