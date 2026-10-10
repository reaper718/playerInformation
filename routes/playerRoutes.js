const express = require('express');
const router = express.Router();

const playerController = require('../controllers/playerController');

router.post('/',playerController.addPlayer);
router.get('/:name',playerController.getPlayer);

router.put('/:id',playerController.editPlayer);

module.exports  = router;