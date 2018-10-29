const express = require('express');

const notesRoutes = require('./notesRoutes');

const router = express.Router();

router.use('/notes', notesRoutes);

module.exports = router;