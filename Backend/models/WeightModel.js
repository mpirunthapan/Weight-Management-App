const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WeightSchema = new Schema (
    {
        weight: {
            type: Number,
            required: true,
        },
        note: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Weight", WeightSchema);