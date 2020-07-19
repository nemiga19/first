const personsNamesForArmy = [];

let age = prompt('Введите свой возраст:', '')
let gender = prompt('Введите пол:', '')

let person1 = {
    name: 'Alex',
    age: 20,
    gender: 'male',
}

if (person1.age >= 18 && person1.age <=27 && person1.gender === 'male') {
    personsNamesForArmy.push(person1.name);
}else if (age >= 18 && gender === 'female') {
    console.log("Ты не подходишь");
}

let person2 = {
    name: 'Brad',
    age: 22,
    gender: 'male',
}

if (person2.age >= 18 && person2.age <=27 && person2.gender === 'male') {
    personsNamesForArmy.push(person2.name); 
}else if (age >= 18 && gender === 'female'){
    console.log("Ты не подходишь");
}

let person3 = {
    name: 'Andrew',
    age: 17,
    gender: 'male',
}

if (person3.age >= 18 && person3.age <=27 && person3.gender === 'male') {
    personsNamesForArmy.push(person3.name); 
}else if (age >= 18 && gender === 'female'){
    console.log("Ты не подходишь");
}

let person4 = {
    name: 'Nelly',
    age: 20,
    gender: 'female',
}

if (person4.age >= 18 && person4.age <=27 && person4.gender === 'male') {
    personsNamesForArmy.push(person4.name); 
}else if (age >= 18 && gender === 'female'){
    console.log("Ты не подходишь");
}

let person5 = {
    name: 'Artur',
    age: 18,
    gender: 'male',
}

if (person5.age >= 18 && person5.age <=27 && person5.gender === 'male') {
    personsNamesForArmy.push(person5.name); 
}else if (age >= 18 && gender === 'female'){
    console.log("Ты не подходишь");
}

let person6 = {
    name: 'James',
    age: 16,
    gender: 'male',
}

if (person6.age >=18 && person6.age <=27 && person6.gender === 'male') {
    personsNamesForArmy.push(person6.name); 
}else if (age >=18 && gender === 'female'){
    console.log("Ты не подходишь");
}

console.log(personsNamesForArmy);