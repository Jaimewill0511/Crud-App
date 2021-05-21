const mongoose = require('mongoose');
const {Schema} = mongoose;

const appSchema = new Schema({
    isPopulalar: String,
    data: {
       name:  String,
       email: String,
       country: String
   }
});
const App = mongoose.model("App", appSchema)

module.exports = App;