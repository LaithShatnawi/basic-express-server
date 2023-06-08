module.exports = (req, res, next) => {
    if (req.query.name !== undefined && req.query.name !== '') {
        req.personName = req.query.name;
        next();
    }
    else{
        next('no name entered');
    }
}