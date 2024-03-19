const mongoose = require('mongoose');
const connectToDb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/chat-app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1')
    console.log("connected to db")
}
module.exports = connectToDb;

