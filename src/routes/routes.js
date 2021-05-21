const express = require('express');
const router = express.Router();
const appCtrl= require("../controllers/appController")


router.route("/appData/:id")
.get(appCtrl.findData)
.put(appCtrl.changeData)
.delete(appCtrl.deleteData)

router.route('/appData')
.get(appCtrl.findAllData)
.post(appCtrl.createNewData)


module.exports = router;