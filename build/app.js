"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express from 'express';
var tokens = __importStar(require("./auth"));
var verifyToken = tokens.verifyToken, generateToken = tokens.generateToken;
//const app = express();
var testCircular = function () {
    var obj1 = {
        text: "I am obj1"
    };
    var obj2 = {
        text: "I am obj2"
    };
    obj1.obj = obj2;
    obj2.obj = obj1;
    console.log(obj1);
    console.log(obj1.obj);
    console.log(obj2.obj.obj.obj.obj.obj);
};
var mid = function (req, res, next) {
    console.log('I am mid');
    next();
};
//app.use(mid);
var mid1 = function (req, res, next) {
    console.log('I am mid 1');
    console.log(req.query);
    res.send('Hello');
    next();
};
var mid2 = function (req, res, next) {
    console.log('I am mid 2');
    //	res.send('World');
    next();
};
var mid3 = function (req, res, next) {
    console.log('I am mid 3');
    //	console.log(res);
    console.log(req.params);
    //res.send('Howdy');
    next();
};
// app.get('/mid/:id', [mid2, mid3, mid1])
// app.get('/', (req, res) => {
// 	res.send('hello!!');
// });
// app.listen(3131);
var cred = {
    username: "user",
    password: "Nga 1shi te 8ta!!"
};
var token = generateToken(cred);
console.log('TOKEN ===>', token);
var flag = verifyToken(token);
console.log('IS VALID ===> ', flag);
