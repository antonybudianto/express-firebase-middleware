var admin = require.main.require('firebase-admin');

var logger = require('./util/logger');

function firebaseAuthMiddleware(req, res, next) {
    let authorization = req.header('Authorization');
    if (authorization) {
        let token = authorization.split(' ');
        admin.auth().verifyIdToken(token[1])
        .then((decodedToken) => {
            logger.log(decodedToken);
            res.locals.user = decodedToken;
            next();
        })
        .catch(err => {
            logger.log(err);
            res.sendStatus(401);
        });
    } else {
        logger.log('Authorization header is not found');
        res.sendStatus(401);
    }
}

module.exports = firebaseAuthMiddleware;
