function sum(){
    console.log(10+20);
}

sum();

let summation1 = function(){
    console.log('using let');
    console.log(10+20);
}

let summation2 = function debugName(){
    console.log('using debugName');
    console.log(10+20);
}

summation1();
summation2();

console.log('----------------------------------------------');

let variable = 'global';

function localVariables(){
    let variable = 'local';
    console.log(variable + 'Inside function');
}

localVariables();
console.log(variable + 'Outside function');