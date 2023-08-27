const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const commentRoutes = require('./api/commentRoutes');
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');



router.use('/', homeRoutes);
router.use('/api/comment', commentRoutes);
router.use('/api/user', userRoutes);
router.use('/api/post',postRoutes);

module.exports = router;
