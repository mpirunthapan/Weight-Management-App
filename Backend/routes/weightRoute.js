const express = require('express');

const router = express.Router()

const {createWeight,getWeights,getSingleWeight,updateWeight,deleteWeight} = require("../controllers/weightController")

router.post('/', createWeight);
router.get('/', getWeights);
router.get('/:id', getSingleWeight);
router.patch('/:id', updateWeight);
router.delete('/:id', deleteWeight);

module.exports = router;