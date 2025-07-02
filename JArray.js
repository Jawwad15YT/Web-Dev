// array is nothing but a spacial variable where we can put multiple data together

let fruits = ["banana", "apple", "guava", "peach", "watermelon", "pineapple"]

console.log(fruits);

console.log(fruits["0"])
console.log(fruits["3"])
console.log(fruits["1"])


let myFruit = fruits[1];

// Slicing

let newfruits = fruits.slice(1,4)
console.log(newfruits) 

let bigFruits = fruits.slice(4,6)
console.log(bigFruits)

//


fruits.push("mango")
fruits.push("grape")
fruits.push("blueberries")
fruits.push("tomato")

console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.shift()
console.log(fruits)

fruits.splice(2,2)
console.log(fruits);

// map

let Capital = fruits.map(function(myFruit){
    return myFruit.toUpperCase();
})

console.log(Capital);

let numbers = [1,2,3,4,5,6];

console.log(numbers);

let SQN = numbers.map(function(n){
    return n*n;
})

console.log(SQN);

let names = ["Adib","Nahir","Rishan","Ayman"]

console.log(names)

let newName = names.map(function(name){
    return "Mr. "+name
})

console.log(newName);

let age = [14,18,90,45,12,11,24,34]

console.log(age);

let Adult = age.map(function(a){
    if (a>18){return a}

});

console.log(Adult);