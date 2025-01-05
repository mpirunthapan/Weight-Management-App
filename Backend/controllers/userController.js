const userModel = require('../models/UserModel');

//To create a USER - POST
const createUser= async (req, res) => {
    const {name,age,email,phone,password,height,profilePhoto,address,weight,activityLevel} = req.body;

    try {
        const newUser = await userModel.create({name,age,email,phone,password,height,profilePhoto,address,weight,activityLevel})
        res.status(200).json(newUser);
    } catch (e) {
        res.status(400).json({error: e.message});
    }
};


module.exports = {createUser};