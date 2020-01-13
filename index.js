
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

// const newObj = JSON.stringify(obj);

// console.log(newObj);

const string = JSON.stringify(obj1);
console.log(string)
