import  jwt from 'jsonwebtoken';

const secret = 'z1234raefqwr3';

const generateToken = (credential: any): string =>  jwt.sign(credential, secret,{expiresIn: '1h', algorithm: 'HS512'});

const verifyToken = (token: any): boolean => {
    try{

        const options: any =  {
            expiresIn: '1h',
            algorithm: 'HS512'
        };

        jwt.verify(token, secret, options);
        return true;
    }catch(err){
        return false;
    }
}

export {
    generateToken,
    verifyToken
};