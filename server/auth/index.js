const router = require('express').Router();

// Map to api files
// starting from /auth
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));

module.exports = router;
