# 📘 JavaScript Simple Functions – Practice Assignments

This README contains **10 beginner-friendly JavaScript function assignments** along with:

* ✅ **Solutions**
* 🧠 **Clear explanations**
* 🖥️ **Console input examples (Node.js)**

These exercises help you master **basic function syntax, logic, and input/output handling**.

---

## 🧾 How to Take Input from Console (Node.js)

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

You’ll see this used in the examples below.

---

## 1️⃣ Square of a Number

### Problem

Write a function that returns the square of a number.

### Solution

```js
function square(num) {
  return num * num;
}

rl.question("Enter a number: ", (num) => {
  console.log("Square:", square(Number(num)));
  rl.close();
});
```

### Explanation

The function multiplies the number by itself. `Number()` converts string input to a number.

---

## 2️⃣ Add Two Numbers

### Problem

Write a function that adds two numbers.

### Solution

```js
function add(a, b) {
  return a + b;
}

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    console.log("Sum:", add(Number(a), Number(b)));
    rl.close();
  });
});
```

### Explanation

Two parameters are passed and added. Inputs are converted to numbers.

---

## 3️⃣ Even or Odd

### Problem

Check whether a number is even or odd.

### Solution

```js
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

rl.question("Enter a number: ", (num) => {
  console.log(checkEvenOdd(Number(num)));
  rl.close();
});
```

### Explanation

The modulus operator `%` checks the remainder when divided by 2.

---

## 4️⃣ Find Maximum of Two Numbers

### Problem

Return the larger of two numbers.

### Solution

```js
function findMax(a, b) {
  return a > b ? a : b;
}

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    console.log("Maximum:", findMax(Number(a), Number(b)));
    rl.close();
  });
});
```

### Explanation

A ternary operator is used for comparison.

---

## 5️⃣ Celsius to Fahrenheit

### Problem

Convert Celsius to Fahrenheit.

### Solution

```js
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

rl.question("Enter temperature in Celsius: ", (c) => {
  console.log("Fahrenheit:", celsiusToFahrenheit(Number(c)));
  rl.close();
});
```

### Explanation

The standard temperature conversion formula is applied.

---

## 6️⃣ Area of a Rectangle

### Problem

Calculate area using length and width.

### Solution

```js
function rectangleArea(length, width) {
  return length * width;
}

rl.question("Enter length: ", (l) => {
  rl.question("Enter width: ", (w) => {
    console.log("Area:", rectangleArea(Number(l), Number(w)));
    rl.close();
  });
});
```

### Explanation

Area is calculated by multiplying length and width.

---

## 7️⃣ Positive, Negative, or Zero

### Problem

Check if a number is positive, negative, or zero.

### Solution

```js
function checkNumber(num) {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
}

rl.question("Enter a number: ", (num) => {
  console.log(checkNumber(Number(num)));
  rl.close();
});
```

### Explanation

Conditional statements determine the number category.

---

## 8️⃣ String Length

### Problem

Return the length of a string.

### Solution

```js
function stringLength(str) {
  return str.length;
}

rl.question("Enter a string: ", (str) => {
  console.log("Length:", stringLength(str));
  rl.close();
});
```

### Explanation

The `.length` property gives the total characters.

---

## 9️⃣ Reverse a String

### Problem

Reverse a given string.

### Solution

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}

rl.question("Enter a string: ", (str) => {
  console.log("Reversed:", reverseString(str));
  rl.close();
});
```

### Explanation

The string is converted to an array, reversed, then joined back.

---

## 🔟 Simple Interest Calculator

### Problem

Calculate simple interest.

### Solution

```js
function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}

rl.question("Enter Principal: ", (p) => {
  rl.question("Enter Rate: ", (r) => {
    rl.question("Enter Time: ", (t) => {
      console.log("Simple Interest:", simpleInterest(Number(p), Number(r), Number(t)));
      rl.close();
    });
  });
});
```

### Explanation

The standard simple interest formula is used.

---

## ✅ Next Steps

* Rewrite all functions using **function expressions**
* Convert them to **arrow functions**
* Combine multiple functions in a **menu-based program**

If you want, I can prepare:

* 📄 A **PDF / printable version**
* 🧪 **Test cases** for each function
* 🚀 **Intermediate function challenges**
