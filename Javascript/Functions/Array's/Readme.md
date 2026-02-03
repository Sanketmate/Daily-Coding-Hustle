# 📘 JavaScript Arrays – Practice Assignments (With Solutions)

This README contains a complete set of JavaScript Array practice questions with detailed answers and explanations. It is designed for beginners to intermediate learners.

---

## 📌 Table of Contents

1. Level 1 – Basics
2. Level 2 – Intermediate
3. Level 3 – Array Methods
4. Level 4 – Logic Problems
5. Level 5 – Mini Projects

---

# ✅ LEVEL 1: BASICS

## 1. Create & Access

### Question

Create an array of 5 fruits and print first, last, and length.

### Answer

```js
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);
```

---

## 2. Add & Remove Elements

### Question

Use push, pop, and unshift to modify an array.

### Answer

```js
let skills = [];

skills.push("HTML");
skills.push("CSS");
skills.push("JavaScript");

skills.pop();
skills.unshift("React");

console.log(skills);
```

---

## 3. Loop Through Array

### Question

Print elements using for loop and forEach.

### Answer

```js
let nums = [10,20,30,40,50];

for(let i=0;i<nums.length;i++){
  console.log(nums[i]);
}

nums.forEach(num => console.log(num));
```

---

# ✅ LEVEL 2: INTERMEDIATE

## 4. Sum of Elements

### Question

Find sum of all elements.

### Answer

```js
let arr = [2,4,6];
let sum = 0;

for(let num of arr){
  sum += num;
}

console.log(sum);
```

---

## 5. Largest & Smallest

### Question

Find maximum and minimum.

### Answer

```js
let nums = [10,50,3,99,25];

let max = nums[0];
let min = nums[0];

for(let num of nums){
  if(num > max) max = num;
  if(num < min) min = num;
}

console.log(max, min);
```

---

## 6. Reverse Array

### Question

Reverse without using reverse().

### Answer

```js
let arr = [1,2,3,4,5];
let reversed = [];

for(let i=arr.length-1;i>=0;i--){
  reversed.push(arr[i]);
}

console.log(reversed);
```

---

## 7. Remove Duplicates

### Question

Remove duplicate values.

### Answer

```js
let arr = [1,2,2,3,4,4,5];
let unique = [];

for(let num of arr){
  if(!unique.includes(num)){
    unique.push(num);
  }
}

console.log(unique);
```

---

## 8. Search Element

### Question

Check if element exists.

### Answer

```js
let langs = ["HTML","CSS","JavaScript"];

if(langs.includes("JavaScript")){
  console.log("Found");
}else{
  console.log("Not Found");
}
```

---

# ✅ LEVEL 3: ARRAY METHODS

## 9. map()

### Question

Multiply each element by 2.

### Answer

```js
let arr = [2,4,6];
let result = arr.map(num => num * 2);
console.log(result);
```

---

## 10. filter()

### Question

Get numbers greater than 20.

### Answer

```js
let arr = [10,15,20,25,30];
let result = arr.filter(num => num > 20);
console.log(result);
```

---

## 11. reduce()

### Question

Find sum using reduce.

### Answer

```js
let arr = [10,20,30];

let sum = arr.reduce((total,num)=>{
  return total + num;
},0);

console.log(sum);
```

---

## 12. sort()

### Question

Sort array in ascending order.

### Answer

```js
let arr = [40,10,100,25];

arr.sort((a,b)=>a-b);
console.log(arr);
```

---

# ✅ LEVEL 4: LOGIC PROBLEMS

## 13. Second Largest Number

### Question

Find second largest value.

### Answer

```js
let arr = [10,50,40,99,30];

let max = Math.max(...arr);
let filtered = arr.filter(n => n !== max);
let second = Math.max(...filtered);

console.log(second);
```

---

## 14. Rotate Array

### Question

Rotate array right by one.

### Answer

```js
let arr = [1,2,3,4,5];

let last = arr.pop();
arr.unshift(last);

console.log(arr);
```

---

## 15. Merge Arrays

### Question

Merge without concat().

### Answer

```js
let a = [1,2,3];
let b = [4,5,6];
let merged = [];

for(let num of a) merged.push(num);
for(let num of b) merged.push(num);

console.log(merged);
```

---

## 16. Count Occurrences

### Question

Count frequency of elements.

### Answer

```js
let arr = ["a","b","a","c","b","a"];
let count = {};

for(let item of arr){
  if(count[item]){
    count[item]++;
  }else{
    count[item] = 1;
  }
}

console.log(count);
```

---

# ✅ LEVEL 5: MINI PROJECTS

## 17. Student Marks System

### Question

Find average, highest, and passed students.

### Answer

```js
let marks = [78,85,90,66,88];

let total = marks.reduce((a,b)=>a+b);
let avg = total / marks.length;
let highest = Math.max(...marks);
let passed = marks.filter(m => m>70);

console.log(avg, highest, passed);
```

---

## 18. Todo List

### Question

Create simple todo system.

### Answer

```js
let todos = [];

function add(task){
  todos.push(task);
}

function remove(){
  todos.pop();
}

function show(){
  console.log(todos);
}

add("Study JS");
add("Practice");
show();
remove();
show();
```

---

## 19. Shopping Cart

### Question

Calculate total, discount, and final price.

### Answer

```js
let prices = [499,1299,299,799];

let total = prices.reduce((a,b)=>a+b);
let discount = total * 0.10;
let final = total - discount;

console.log(total, discount, final);
```

---

# 🎯 Learning Outcomes

After completing this guide, you should be able to:

* Create and manipulate arrays
* Use map, filter, reduce
* Solve logic problems
* Build mini projects

---

Happy Coding 🚀
