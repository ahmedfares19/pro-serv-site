const express = require('express');
const router = express.Router()
const path = require('path')

const adminLogin = (req , res) => {
    try {
        // appLogger.debug("blogMainPage called" ,'info' , "blogMainPage called")
        res.status(200).render(path.join('en','admin','admin-login'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "serveLandingPage"])
    }
}


router.get('/admin' , adminLogin)


module.exports = router;