const mongoose = require('mongoose');
const {Schema} = mongoose;
const connectionString = "mongodb://localhost:27017/CRUD_app"

module.exports = () => {
    mongoose.connect(connectionString, {
        useUnifiedTopology: true,
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
