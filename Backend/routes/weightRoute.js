const express = require('express');

const router = express.Router()

const {createWeight,getWeights,getSingleWeight} = require("../controllers/weightController")

router.post('/', createWeight);
router.get('/', getWeights);
router.get('/:id', getSingleWeight);

module.exports = router;