const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
var mongoose = require('mongoose');

require('dotenv').config();
const middlewares = require('./middlewares');

const apiRoutes = require('./api/routes');
const port = process.env.PORT || 1337;
const app = express();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('common'));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "hello world"
    })
});
app.use('/api', apiRoutes);

app.use(middlewares.errorNotFound)
app.use(middlewares.errorHandler);

app.listen(port, () => {

    console.log(`listening at http://localhost:${port}`);

});