//DB conection
const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

console.log(process.env.MONGO_USER);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.dgmru.mongodb.net/?retryWrites=true&w=majority`)
.then(d=>console.log('Connected'))
.catch(e=>console.log('Error connecting',e));


//2. Named Export
exports.mongoose = mongoose

