const express = require('express');
// const externalModule = require('./logger')
const externalModulea = require('../logger/logger')
const externalModuleb =require('../util/helper')
const externalModulec= require ('../validator/formater')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModulea.welcome()
    externalModuleb.printDate()
    externalModuleb.getMonth()
    externalModuleb.getBatchInfo()
    externalModulec.d()

    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reasongit  checko