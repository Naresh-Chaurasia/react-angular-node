let person ={
    name:'NC',
    age:46,
    theFunction:function(){
        console.log(this.name);
    }
};

console.log(person.age);
console.log(person['age']);

person.theFunction();

console.log('-------------pass object by reference---------')

function changeValue(thePerson){
    thePerson.age++;
}

changeValue(person);
console.log(typeof person);
console.log(person.age);