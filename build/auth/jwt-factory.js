"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secret = 'z1234raefqwr3';
var generateToken = function (credential) { return jsonwebtoken_1.default.sign(credential, secret, { expiresIn: '1h', algorithm: 'HS512' }); };
exports.generateToken = generateToken;
var verifyToken = function (token) {
    try {
        var options = {
            expiresIn: '1h',
            algorithm: 'HS512'
        };
        jsonwebtoken_1.default.verify(token, secret, options);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.verifyToken = verifyToken;
