const express = require('express');

const noteRoutes = require('./noteRoutes');

const router = express.Router();

router.user('/notes', noteRoutes);

module.exports = router;