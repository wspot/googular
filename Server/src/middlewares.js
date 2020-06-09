const errorNotFound = (req, res, next) => {
    const error = new Error('not found - ${req.originalUrl}');
    res.status(404);
    next();
};

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'nothing' : error.stack
    });
};

module.exports = {
    errorNotFound,
    errorHandler
}