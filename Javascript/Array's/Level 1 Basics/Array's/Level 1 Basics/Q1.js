// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// console.log(fruits[0])
// console.log(fruits[fruits.length-1])
// console.log(fruits.length)



// Questions 2

// let skills = [];


// skills.push("HTML");
// skills.push("CSS");
// skills.push("JavaScript");
// skills.push("React");

// skills.pop();
// skills.unshift("React");
// skills.unshift("cpp")
// skills.unshift("c")
// skills.shift();
// console.log(skills);

// 
// ## 3. Loop Through Array

let array = [10,20,30,40,50];
let sum=0;
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    sum+=array[index];
}

console.log(sum);

for (let index = array.length-1; index >= 0; index--) {
    console.log(array[index])
}

let key = 30;

for (let index = 0; index < array.length; index++) {
    if (key==array[index]) {
        console.log(`The Key : ${key} found at ${index}`)
    }
    
}