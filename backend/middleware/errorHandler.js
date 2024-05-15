const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Server error',
        },
    });
};

module.exports = errorHandler;
