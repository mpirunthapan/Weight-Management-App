const mongoose = require("mongoose");
const weightModel = require('../models/WeightModel');
const WeightModel = require("../models/WeightModel");

//To create a Weight - POST
const createWeight = async (req, res) => {
    const {weight,note} = req.body;

    try {
        const newWeight = await weightModel.create({weight,note});
        res.status(200).json(newWeight);
    } catch (e) {
        res.status(400).json({error: e.message});
    }
};

//To get all Weights
const getWeights = async (req, res) => {
    try {
        const weight = await weightModel.find({});
        res.status(200).json(weight);
    }
    catch (e) {
        res.status(400).json({error: e.message});
    }
}

//To get single Weight
const getSingleWeight = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'Weight not Found'});
    }
    try {
        const singleweight = await WeightModel.findById(id)
        res.status(200).json(singleweight)
    }
    catch (e) {
        res.status(400).json({error: e.message});
    }
}

module.exports = {createWeight, getWeights, getSingleWeight};