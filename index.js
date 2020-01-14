//import express from 'express';
import {generateToken, verifyToken} from './auth';

//const app = express();

const testCircular = () => {
	let obj1 = {
		text: "I am obj1"
	};
	let obj2 = {
		text: "I am obj2"
	};

	obj1.obj = obj2;
	obj2.obj = obj1;


	console.log(obj1);
	console.log(obj1.obj);
	console.log(obj2.obj.obj.obj.obj.obj);
};

const mid = (req, res, next) => {
	console.log('I am mid');
	next();

}


//app.use(mid);

const mid1 = (req, res, next) => {
	console.log('I am mid 1');
	console.log(req.query);
	res.send('Hello');
	next();
}

const mid2 = (req, res, next) => {
	console.log('I am mid 2');
	//	res.send('World');
	next();
}

const mid3 = (req, res, next) => {
	console.log('I am mid 3');
	//	console.log(res);
	console.log(req.params);
	//res.send('Howdy');
	next();
}

// app.get('/mid/:id', [mid2, mid3, mid1])

// app.get('/', (req, res) => {
// 	res.send('hello!!');
// });



// app.listen(3131);

const cred = {
	username: "user",
	password: "Nga 1shi te 8ta!!"
};

const token = generateToken(cred);

console.log('TOKEN ===>', token);


const flag = verifyToken(token);

console.log('IS VALID ===> ', flag);