const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const weightRoutes = require("./routes/weightRoute");
const userRoutes = require("./routes/userRoute");

//Middleware
app.use((req,res,next) => {
    console.log("path " + req.path + " method " + req.method)
    next();
})


app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('path' + req.path + 'method ' + req.method);
// });

//DB Connection
mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(
            "DB Connected Successfully and listening on port " + process.env.PORT
        );
    });
}).catch(error => console.log(error));

app.use('/api/weights', weightRoutes);
app.use('/api/users', userRoutes);