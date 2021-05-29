const mongoose = require('mongoose');
const {Schema} = mongoose;

const appSchema = new Schema({
    
    data: {
       name:  String,
       email: {
            type: String,
            unique: true
        },
       country: String
   }
});


module.exports = mongoose.model("App", appSchema);
