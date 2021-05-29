const mongoose = require('mongoose');
const {Schema} = mongoose;
const connectionString = "mongodb+srv://admin-william:ecgem73bQE3U9B4@data.13ulc.mongodb.net/CRUD_app?retryWrites=true&w=majority";

module.exports = () => {
    mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }, (err) => {
        if (err){
            console.log({err})
        } else {
            console.log('Database connected successfully')
        }
    })

}
//ecgem73bQE3U9B4





