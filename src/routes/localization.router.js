const express = require('express');
// const appLogger = require('../utils/app-logger')
require('dotenv').config()
const router = express.Router()
const path = require('path')
const serveSocialInsurenceService = (req , res) => {
    try {
        // appLogger.debug("serveLandingPage called" ,'info' , "serveLandingPage called")
        res.status(200).render(path.join('ar','services','social-insurence-service'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "serveLandingPage"])
    }
}


const changeToArabicVersion = (req , res) => {
    try {
        // appLogger.debug("serveManPowerAndForeignLaborService called" ,'info' , "serveManPowerAndForeignLaborService called")
        res.status(200).render(path.join('index-arabic'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "serveManPowerAndForeignLaborService"])
    }
}
const changeToEnglishVersion = (req , res) => {
    try {
        // appLogger.debug("serveManPowerAndForeignLaborService called" ,'info' , "serveManPowerAndForeignLaborService called")
        res.status(200).render(path.join('index'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "serveManPowerAndForeignLaborService"])
    }
}



const serveManPowerAndForeignLaborService = (req , res) => {
    try {
        // appLogger.debug("serveManPowerAndForeignLaborService called" ,'info' , "serveManPowerAndForeignLaborService called")
        res.status(200).render(path.join('ar','services','manpower-and-foreign-labor-affairs'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "serveManPowerAndForeignLaborService"])
    }
}
const outsourcing = (req , res) => {
    try {
        // appLogger.debug("outsourcing called" ,'info' , "outsourcing called")
        res.status(200).render(path.join('ar','services','outsourcing'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "outsourcing"])
    }
}
const proServTrainingAcademy = (req , res) => {
    try {
        // appLogger.debug("proServTrainingAcademy called" ,'info' , "proServTrainingAcademy called")
        res.status(200).render(path.join('ar','services','proserv-training-academy'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "proServTrainingAcademy"])
    }
}
const hrSystemsProcedures = (req , res) => {
    try {
        console.log("heer");
        // appLogger.debug("hrSystemsProcedures called" ,'info' , "hrSystemsProcedures called")
        res.status(200).render(path.join('ar','services','hr-systems-procedures'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "hrSystemsProcedures"])
    }
}
const legalService = (req , res) => {
    try {
        // appLogger.debug("legalService called" ,'info' , "legalService called")
        res.status(200).render(path.join('ar','services','legal-service'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "legalService"])
    }
}
const accountingServices = (req , res) => {
    try {
        // appLogger.debug("monitors called" ,'info' , "monitors called")
        res.status(200).render(path.join('ar','services','accounting-services'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "accounting-services"])
    }
}
const printers = (req , res) => {
    try {
        // appLogger.debug("printers called" ,'info' , "printers called")
        res.status(200).render(path.join('ar','services','printers'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "printers"])
    }
}

const recruitment = (req , res) => {
    try {
        // appLogger.debug("recruitment called" ,'info' , "recruitment called")
        res.status(200).render(path.join('ar','services','recruitment'))
    } catch(err) {
        // appLogger.debug(err ,'error',[err , "recruitment"])
    }
}


router.get('/social-insurence-service' , serveSocialInsurenceService)
router.get('/manpower-and-foreign-labor-affairs' , serveManPowerAndForeignLaborService)
router.get('/outsourcing' , outsourcing)
router.get('/proserv-training-academy' , proServTrainingAcademy)
router.get('/hr-systems-procedures' , hrSystemsProcedures)
router.get('/legal-service' , legalService)
router.get('/accounting-services' , accountingServices)
router.get('/recruitment' , recruitment)
router.get('/printers' , printers)
router.get('/' , changeToArabicVersion)
module.exports = router;