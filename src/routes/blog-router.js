const express = require('express');
const appLogger = require('../utils/app-logger')
const router = express.Router()
const path = require('path')

const blogMainPage = (req , res) => {
    try {
        // appLogger.debug("blogMainPage called" ,'info' , "blogMainPage called")
        res.status(200).render(path.join('en','blog','blog-home'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "serveLandingPage"])
    }
}


router.get('/blog' , blogMainPage)


module.exports = router;