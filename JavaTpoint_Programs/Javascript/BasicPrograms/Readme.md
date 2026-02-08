# 📘 Python Basic Programs – With Solutions & Optimized Approaches

This README contains common beginner-level Python programs with:

* Problem Statement
* Standard Solution
* Optimized Approach
* Explanation

These programs help in building strong fundamentals in Python programming.

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

## 1️⃣ Fibonacci Series in Python

### Problem

Print Fibonacci series up to `n` terms.

### Optimized Solution

```python
n = int(input("Enter number of terms: "))

a, b = 0, 1

for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b
```

### Explanation

* Uses iteration instead of recursion
* Tuple swapping for efficiency
* Time Complexity: **O(n)**

---

## 2️⃣ Prime Number Program

### Problem

Check if a number is prime.

### Optimized Solution

```python
num = int(input("Enter number: "))

if num <= 1:
    print("Not Prime")
else:
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            print("Not Prime")
            break
    else:
        print("Prime")
```

### Optimization

* Checks divisibility up to √n
* Time Complexity: **O(√n)**

---

## 3️⃣ Palindrome Program

### Problem

Check if a number is palindrome.

### Optimized Solution

```python
num = input("Enter number: ")

if num == num[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")
```

### Explanation

* Uses slicing for reverse
* Fast and readable

---

## 4️⃣ Factorial Program

### Problem

Find factorial of a number.

### Optimized Solution

```python
n = int(input("Enter number: "))

fact = 1

for i in range(1, n + 1):
    fact *= i

print(fact)
```

### Optimization

* Iterative approach
* Avoids recursion overhead

---

## 5️⃣ Armstrong Number

### Problem

Check if a number is Armstrong.

### Optimized Solution

```python
num = input("Enter number: ")

power = len(num)
sum_val = sum(int(d) ** power for d in num)

if int(num) == sum_val:
    print("Armstrong")
else:
    print("Not Armstrong")
```

### Explanation

* Uses generator expression
* Works for any digit length

---

## 6️⃣ Generate Random Number

### Problem

Generate random number.

### Optimized Solution

```python
import random

num = random.randint(1, 100)
print(num)
```

### Optimization

* Uses `random` module
* Simple and efficient

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

```python
n = 4

for i in range(1, n + 1):
    print("*" * i)
```

### Explanation

* String multiplication
* More efficient than nested loops

---

## 8️⃣ Compare Two Objects

### Problem

Compare two objects in Python.

### Optimized Solution

```python
class Student:
    def __init__(self, id):
        self.id = id

    def __eq__(self, other):
        return self.id == other.id

s1 = Student(10)
s2 = Student(10)

print(s1 == s2)
```

### Optimization

* Override `__eq__()` method
* Enables value comparison

---

## 9️⃣ Create Object in Python

### Problem

Create and use object.

### Solution

```python
class Car:
    def __init__(self, name):
        self.name = name

    def show(self):
        print(self.name)

c = Car("BMW")
c.show()
```

### Explanation

* Uses constructor `__init__`
* Object creation via class

---

## 🔟 Print ASCII Value

### Problem

Print ASCII value of character.

### Optimized Solution

```python
ch = input("Enter character: ")

print(ord(ch))
```

### Explanation

* `ord()` converts char to ASCII
* Built-in optimized function

---

# ✅ Summary

| Program    | Best Optimization    |
| ---------- | -------------------- |
| Fibonacci  | Tuple Swapping       |
| Prime      | √n Loop              |
| Palindrome | String Slicing       |
| Factorial  | Loop                 |
| Armstrong  | Generator Expression |
| Random     | random Module        |
| Pattern    | String Multiply      |
| Compare    | **eq**()             |
| Object     | Class + **init**     |
| ASCII      | ord()                |

---

## 🚀 Practice Tip

Enhance these programs by:

* Converting into functions
* Adding exception handling
* Using list comprehensions
* Writing unit tests

Happy Coding! 🐍💻🔥
