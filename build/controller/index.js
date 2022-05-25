"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = require("../db");
const userData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({
        status: true,
        message: 'Back-end Work Fine!!'
    });
});
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("get data successfully!!!");
    db.query('SELECT * FROM bioData', (error, result) => {
        if (error) {
            console.log("SELECT query error");
        }
        else {
            let data = result;
            res.status(200).send({
                status: true,
                data: data
            });
        }
    });
});
const submitForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fname, lname, email } = req.body;
    db.query('SELECT email FROM bioData WHERE ?', { email: email }, (err, result) => {
        if (err) {
            console.log("email select query not work");
        }
        else {
            const SelEmail = result;
            if (SelEmail.length > 0) {
                res.send({
                    status: false,
                    data: "Email is already use"
                });
            }
            else {
                db.query('INSERT INTO bioData SET ?', { Firstname: fname, Lastname: lname, email: email }, (error, results) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log("data insert successfully!!!");
                        db.query('SELECT * FROM bioData', (error, result) => {
                            if (error) {
                                console.log("SELECT query error");
                            }
                            else {
                                let data = result;
                                res.status(200).send({
                                    status: true,
                                    data: data
                                });
                            }
                        });
                    }
                });
            }
        }
    });
});
module.exports = {
    userData,
    getData,
    submitForm
};
