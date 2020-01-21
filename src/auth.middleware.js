import { log } from './util/logger';

const admin = require('firebase-admin');

export default function firebaseAuthMiddleware(req, res, next) {
    const authorization = req.header('Authorization');
    if (authorization) {
        let token = authorization.split(' ');
        admin.auth().verifyIdToken(token[1])
        .then((decodedToken) => {
            log(decodedToken);
            res.locals.user = decodedToken;
            next();
        })
        .catch(err => {
            log(err);
            res.sendStatus(401);
        });
    } else {
        log('Authorization header is not found');
        res.sendStatus(401);
    }
}
