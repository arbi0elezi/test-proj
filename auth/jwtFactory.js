const jwt =require( 'jsonwebtoken');

const secret = 'z1234raefqwr3';

const generateToken = credential =>  jwt.sign(credential, secret,{expiresIn: '1h', algorithm: 'HS512'});

const verifyToken = token => {
    try{
        jwt.verify(token, secret, {algorithm: 'HS512', expiresIn: '1h'});
        return true;
    }catch(err){
        return false;
    }
}

module.exports = {
    generateToken,
    verifyToken
};