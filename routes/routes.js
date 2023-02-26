const express = require('express');
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');
const reactionRoutes = require('./api/reactionRoutes');

const router = express.Router();

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);
router.use('/api/thoughts/:thoughtId', reactionRoutes);

module.exports = router;