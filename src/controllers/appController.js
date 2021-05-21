const App = require('../models/model');
exports.createNewData = (req,res) => {
    App.create({
        ...req.body
        
        }, (err, data) => {
      if (err) return res.status(500).json({message: err})
     
      else return res.status(200).json(({message: "Request Sucessful", data}))
    })
  }

  exports.findAllData = (req,res) => {
    let conditions ={};
    App.find(conditions, ((err, data) => {
      if (err) return res.status(500).json({message: err})
      else return res.status(200).json({data})
    }))
  }

  exports.changeData = (req, res) => {
    App.findByIdAndUpdate(req.params.id, {
        ...req.body
    }, (err,data) => {
      if (err) {
        return res.status(500).json({message: err})
      } else if (!data) {
        return res.status(404).json({message: "data not found"})} 
        else {
           data.save((err, savedata) => {
              if (err) return res.status(500).json({err})
              else return res.status(200).json({message: "data updated sucessfully"})
            })
          
        }
    })
  }

  exports.findData = (req, res) => {
    App.findById( req.params.id , (err, data) => {
        if (err) {
              return res.status(500).json({message: err}) } 
        else if (!data) {
              return res.status(404).json({message: "data not found"})} 
        else {
                return res.status(200).json({ data})
         }
    })
  }

  exports.deleteData = (req, res) => {
    App.findByIdAndDelete(req.params.id, ((err, data) => {
      if (err) return res.status(500).json({message: err})
      else if (!data) return res.status(404).json({message: "data not found"})
      else return res.status(200).json({message: "data deleted sucessfully"})
    }))
  }