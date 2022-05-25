"use strict";
const router = require('express').Router();
const contoller = require('../controller');
router.get('/', contoller.userData);
router.get("/getData", contoller.getData);
router.post("/submitForm", contoller.submitForm);
module.exports = router;
