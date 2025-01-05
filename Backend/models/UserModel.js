const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true,
          },
          age: {
            type: Number,
            required: true,
            min: 0,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'],
          },
          phone: {
            type: String,
            required: true,
            unique: true,
            match: [/^\d{10}$/, 'Phone number must be 10 digits.'],
          },
          password: {
            type: String,
            required: true,
            minlength: 6,
          },
          height: {
            type: Number, // in centimeters
            required: true,
          },
          profilePhoto: {
            type: String, // URL of the profile photo
            default: null,
          },
          address: {
            type: String,
            trim: true,
            default: null,
          },
          weight: {
            type: Number, // in kilograms
            default: null,
          },
          activityLevel: {
            type: String,
            enum: ['sedentary', 'light', 'moderate', 'active', 'very active'],
            default: 'sedentary',
          }
        },
        {
            timestamps: true,
        }
        );
        
module.exports = mongoose.model("User", UserSchema);