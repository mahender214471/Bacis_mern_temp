const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controllers")
router.get('/test', (req, res) => {
    res.send("Auth routes configured")
})
module.exports = router;