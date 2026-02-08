# 📘 JavaScript Basic Programs – With Solutions & Optimized Approaches

This README contains common beginner-level JavaScript programs with:

* Problem Statement
* Standard Solution
* Optimized Approach
* Explanation

These programs help in building strong fundamentals in JavaScript programming.

---

## 📌 Table of Contents

1. Fibonacci Series
2. Prime Number
3. Palindrome Number
4. Factorial
5. Armstrong Number
6. Random Number
7. Pattern Printing
8. Compare Two Objects
9. Create Object
10. ASCII Value

---

## 1️⃣ Fibonacci Series in JavaScript

### Problem

Print Fibonacci series up to `n` terms.

### Optimized Solution

```javascript
let n = Number(prompt("Enter number of terms:"));

let a = 0, b = 1;

for (let i = 0; i < n; i++) {
  console.log(a);
  [a, b] = [b, a + b];
}
```

### Explanation

* Uses iteration
* Destructuring for swapping
* Time Complexity: **O(n)**

---

## 2️⃣ Prime Number Program

### Problem

Check if a number is prime.

### Optimized Solution

```javascript
let num = Number(prompt("Enter number:"));
let isPrime = true;

if (num <= 1) isPrime = false;

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime" : "Not Prime");
```

### Optimization

* Loop runs till √n
* Time Complexity: **O(√n)**

---

## 3️⃣ Palindrome Program

### Problem

Check if a number/string is palindrome.

### Optimized Solution

```javascript
let str = prompt("Enter value:");

let rev = str.split("").reverse().join("");

console.log(str === rev ? "Palindrome" : "Not Palindrome");
```

### Explanation

* Uses built-in methods
* Clean and readable

---

## 4️⃣ Factorial Program

### Problem

Find factorial of a number.

### Optimized Solution

```javascript
let n = Number(prompt("Enter number:"));
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i;
}

console.log(fact);
```

### Optimization

* Iterative approach
* Avoids recursion overhead

---

## 5️⃣ Armstrong Number

### Problem

Check if a number is Armstrong.

### Optimized Solution

```javascript
let num = prompt("Enter number:");
let power = num.length;
let sum = 0;

for (let d of num) {
  sum += Number(d) ** power;
}

console.log(Number(num) === sum ? "Armstrong" : "Not Armstrong");
```

### Explanation

* Works for any digit length
* Uses exponent operator

---

## 6️⃣ Generate Random Number

### Problem

Generate random number.

### Optimized Solution

```javascript
let num = Math.floor(Math.random() * 100) + 1;
console.log(num);
```

### Optimization

* Uses Math.random()
* No external library

---

## 7️⃣ Print Pattern

### Problem

Print star pattern.

### Example Pattern

```
*
**
***
****
```

### Optimized Solution

```javascript
let n = 4;

for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}
```

### Explanation

* Uses repeat()
* More efficient than nested loops

---

## 8️⃣ Compare Two Objects

### Problem

Compare two objects in JavaScript.

### Optimized Solution

```javascript
let s1 = { id: 10 };
let s2 = { id: 10 };

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(isEqual(s1, s2));
```

### Optimization

* Value-based comparison
* Works for simple objects

---

## 9️⃣ Create Object in JavaScript

### Problem

Create and use object.

### Solution

```javascript
class Car {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(this.name);
  }
}

let c = new Car("BMW");
c.show();
```

### Explanation

* Uses ES6 class
* Clean OOP structure

---

## 🔟 Print ASCII Value

### Problem

Print ASCII value of character.

### Optimized Solution

```javascript
let ch = prompt("Enter character:");

console.log(ch.charCodeAt(0));
```

### Explanation

* charCodeAt()
* Built-in optimized method

---

# ✅ Summary

| Program    | Best Optimization |
| ---------- | ----------------- |
| Fibonacci  | Destructuring     |
| Prime      | √n Loop           |
| Palindrome | Built-in Reverse  |
| Factorial  | Loop              |
| Armstrong  | Exponent Operator |
| Random     | Math.random()     |
| Pattern    | repeat()          |
| Compare    | JSON.stringify    |
| Object     | ES6 Class         |
| ASCII      | charCodeAt()      |

---

## 🚀 Practice Tip

Improve these programs by:

* Converting into functions
* Using arrow functions
* Handling invalid inputs
* Writing reusable modules

Happy Coding! 🚀💻🔥
