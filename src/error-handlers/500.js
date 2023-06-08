module.exports = (error, req, res, next) => {
    res.status(500).send({
        'message': '500/Server Error',
        'error': error
    });
}