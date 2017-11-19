# Express Firebase Middleware

Express middleware for your Firebase applications.

[![npm version](https://badge.fury.io/js/express-firebase-middleware.svg)](https://badge.fury.io/js/express-firebase-middleware)

> Starting new express firebase project? try out [Express Firebase](https://github.com/antonybudianto/express-firebase) starter

## Minimum requirements
- Node 6 or later
- npm 3 or later
- Firebase account

## How to use
1. Install the packages using npm
    ```sh
    npm install express firebase-admin express-firebase-middleware
    ```

   Both `express` and `firebase-admin` are peerDependencies.

2. Require it in your express routes
    ```js
    var firebaseMiddleware = require('express-firebase-middleware');

    router.use('/api', firebaseMiddleware.auth);
    ```

3. Now make sure the client's requests have Authorization header like
    ```
    Authorization: Bearer <your-client-token>
    ```

    The client can [get the token](https://firebase.google.com/docs/auth/admin/verify-id-tokens) from their client SDK (Web, Android, iOS Firebase SDK)

4. When requesting, and token is valid, you can get the `user` object from response
    ```js
    router.get('/api/hello', (req, res) => {
        res.json({
            message: `You're logged in as ${res.locals.user.email} with Firebase UID: ${res.locals.user.uid}`
        });
    });
    ```

## Debug mode
By default, the middleware will log and output to console, you can disable them by setting
your environment variable for `APP_DEBUG` to `false`

## License
MIT
