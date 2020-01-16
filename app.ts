import * as tokens from './auth';
import initConn from './sql-database';

import express from 'express';

const app: express.Application = express();

const {verifyToken, generateToken} = tokens;

const mid = (req: any, res: any, next: any): void => {
	console.log('I am mid');
	next();
}


app.use(mid);

const mid1 = (req: any, res: any, next: any): void => {
	console.log('I am mid 1');
	console.log(req.query);
	res.send('Hello');
	next();
}

const mid2 = (req: any, res: any, next: any): void => {
	console.log('I am mid 2');
	next();
}

const mid3 = (req: any, res: any, next: any) => {
	console.log('I am mid 3');
	console.log(req.params);
	next();
}

app.get('/mid/:id', [mid2, mid3, mid1]);

app.get('/', (req, res) => {
	res.send('hello!!');
});


app.listen(3131);

const cred = {
	username: "user",
	password: "Nga 1shi te 8ta!!"
};

const token = generateToken(cred);

console.log('TOKEN ===>', token);


const flag = verifyToken(token);
initConn();

console.log('IS VALID ===> ', flag);
console.log('TYPESCRIPT works!!! !!!!!')