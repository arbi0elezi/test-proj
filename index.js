const express = require('express');
const app = express();

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


app.get('/', (req, res)=>{
	res.send('hello!!');
});


app.listen(3131);
