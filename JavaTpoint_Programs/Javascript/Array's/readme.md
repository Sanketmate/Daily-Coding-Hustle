# 📘 JavaScript Array Programs – With Solutions & Optimized Approaches

This README contains commonly asked JavaScript array programs with:

* Problem Statement
* Optimized Solution
* Explanation

These programs are useful for interviews and strengthening array concepts in JavaScript.

---

## 📌 Table of Contents

1. Copy Array
2. Frequency of Elements
3. Left Rotation
4. Duplicate Elements
5. Print Array
6. Reverse Array
7. Even Position Elements
8. Odd Position Elements
9. Largest Element
10. Smallest Element
11. Count Elements
12. Sum of Elements
13. Right Rotation
14. Sort Ascending
15. Sort Descending
16. 3rd Largest
17. 2nd Largest
18. Largest Number
19. 2nd Smallest
20. Smallest Number
21. Remove Duplicates
22. Odd & Even Numbers
23. Sort Array

---

## 1️⃣ Copy One Array to Another

```javascript
let a = [1, 2, 3, 4, 5];
let b = [...a];

console.log(b);
```

### Optimization

* Uses spread operator

---

## 2️⃣ Frequency of Each Element

```javascript
let arr = [1, 2, 2, 3, 1];
let freq = {};

for (let n of arr) {
  freq[n] = (freq[n] || 0) + 1;
}

console.log(freq);
```

---

## 3️⃣ Left Rotate Array

```javascript
let arr = [1, 2, 3, 4, 5];
let k = 2;

k = k % arr.length;
arr = arr.slice(k).concat(arr.slice(0, k));

console.log(arr);
```

---

## 4️⃣ Print Duplicate Elements

```javascript
let arr = [1, 2, 3, 2, 4, 1];
let dup = arr.filter((x, i) => arr.indexOf(x) !== i);

console.log([...new Set(dup)]);
```

---

## 5️⃣ Print Array Elements

```javascript
let arr = [1, 2, 3, 4];

arr.forEach(x => console.log(x));
```

---

## 6️⃣ Reverse Array

```javascript
let arr = [1, 2, 3, 4];

arr.reverse();
console.log(arr);
```

---

## 7️⃣ Even Position Elements

```javascript
let arr = [10, 20, 30, 40, 50];

let evenPos = arr.filter((_, i) => i % 2 === 1);
console.log(evenPos);
```

---

## 8️⃣ Odd Position Elements

```javascript
let arr = [10, 20, 30, 40, 50];

let oddPos = arr.filter((_, i) => i % 2 === 0);
console.log(oddPos);
```

---

## 9️⃣ Largest Element

```javascript
let arr = [2, 5, 1, 8, 4];

console.log(Math.max(...arr));
```

---

## 🔟 Smallest Element

```javascript
let arr = [2, 5, 1, 8, 4];

console.log(Math.min(...arr));
```

---

## 1️⃣1️⃣ Count Elements

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.length);
```

---

## 1️⃣2️⃣ Sum of Elements

```javascript
let arr = [1, 2, 3, 4];

let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);
```

---

## 1️⃣3️⃣ Right Rotate Array

```javascript
let arr = [1, 2, 3, 4, 5];
let k = 2;

k = k % arr.length;
arr = arr.slice(-k).concat(arr.slice(0, -k));

console.log(arr);
```

---

## 1️⃣4️⃣ Sort Ascending Order

```javascript
let arr = [4, 2, 1, 5, 3];

arr.sort((a, b) => a - b);
console.log(arr);
```

---

## 1️⃣5️⃣ Sort Descending Order

```javascript
let arr = [4, 2, 1, 5, 3];

arr.sort((a, b) => b - a);
console.log(arr);
```

---

## 1️⃣6️⃣ Find 3rd Largest

```javascript
let arr = [4, 2, 1, 5, 3];

arr = [...new Set(arr)];
arr.sort((a, b) => a - b);

console.log(arr[arr.length - 3]);
```

---

## 1️⃣7️⃣ Find 2nd Largest

```javascript
let arr = [4, 2, 1, 5, 3];

arr = [...new Set(arr)];
arr.sort((a, b) => a - b);

console.log(arr[arr.length - 2]);
```

---

## 1️⃣8️⃣ Find Largest Number

```javascript
let arr = [4, 2, 1, 5, 3];

console.log(Math.max(...arr));
```

---

## 1️⃣9️⃣ Find 2nd Smallest

```javascript
let arr = [4, 2, 1, 5, 3];

arr = [...new Set(arr)];
arr.sort((a, b) => a - b);

console.log(arr[1]);
```

---

## 2️⃣0️⃣ Find Smallest Number

```javascript
let arr = [4, 2, 1, 5, 3];

console.log(Math.min(...arr));
```

---

## 2️⃣1️⃣ Remove Duplicates

```javascript
let arr = [1, 2, 2, 3, 1];

let unique = [...new Set(arr)];
console.log(unique);
```

---

## 2️⃣2️⃣ Print Odd & Even Numbers

```javascript
let arr = [1, 2, 3, 4, 5];

let even = arr.filter(x => x % 2 === 0);
let odd = arr.filter(x => x % 2 !== 0);

console.log("Even:", even);
console.log("Odd:", odd);
```

---

## 2️⃣3️⃣ How to Sort an Array

```javascript
let arr = [5, 3, 1, 4, 2];

arr.sort((a, b) => a - b);
console.log(arr);
```

---

# ✅ Summary

| Topic             | Best Practice      |
| ----------------- | ------------------ |
| Copy              | Spread Operator    |
| Frequency         | Object Map         |
| Sort              | Custom Compare     |
| Remove Duplicates | Set                |
| Rotate            | slice() + concat() |

---

## 🚀 Practice Tips

* Convert programs into functions
* Take input from prompt / Node.js
* Avoid built-ins for practice
* Write reusable utilities

Happy Coding! 🚀💻🔥
