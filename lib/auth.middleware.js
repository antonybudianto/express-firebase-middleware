'use strict';

var admin = require.main.require('firebase-admin');

var logger = require('./util/logger');

function firebaseAuthMiddleware(req, res, next) {
    var authorization = req.header('Authorization');
    if (authorization) {
        var token = authorization.split(' ');
        admin.auth().verifyIdToken(token[1]).then(function (decodedToken) {
            logger.log(decodedToken);
            res.locals.user = decodedToken;
            next();
        }).catch(function (err) {
            logger.log(err);
            res.sendStatus(401);
        });
    } else {
        logger.log('Authorization header is not found');
        res.sendStatus(401);
    }
}

module.exports = firebaseAuthMiddleware;