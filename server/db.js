const mongoose = require('mongoose');
const env = require('dotenv');
const path = require('path')
env.config({ path: './.env' });

const mongoURI = `mongodb+srv://ritikajagtap:${process.env.MONGO_PASSWORD}@ritikanotes.gqclj6w.mongodb.net/?retryWrites=true&w=majority`;

const connectToMongo = ()=> {
    mongoose.connect(mongoURI, { useNewUrlParser: true,useUnifiedTopology: true },(error)=> {
        if (error) {
            console.log(error.message);
        } else {
            console.log("Conected to mongo cloud successfully");
        }
    });
}

module.exports = connectToMongo;