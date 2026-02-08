# 📘 Python For Loop Assignments (With Solutions)

This README contains practice problems to help you master `for` loops in Python. Each assignment includes a solution with explanation.

---

## 📌 Table of Contents

1. Basics
2. Number Patterns
3. Strings & Lists
4. Logic Problems
5. Mini Programs

---

# ✅ Level 1 – Basics

### 1. Print Numbers from 1 to 10

**Task:** Print numbers from 1 to 10 using a `for` loop.

**Solution:**

```python
for i in range(1, 11):
    print(i)
```

---

### 2. Print Even Numbers (1–20)

**Task:** Print all even numbers between 1 and 20.

**Solution:**

```python
for i in range(2, 21, 2):
    print(i)
```

---

### 3. Sum of First 10 Numbers

**Task:** Find the sum of numbers from 1 to 10.

**Solution:**

```python
total = 0
for i in range(1, 11):
    total += i
print(total)
```

---

# ✅ Level 2 – Number Patterns

### 4. Print Star Pattern

**Task:** Print this pattern:

```
*
**
***
****
*****
```

**Solution:**

```python
for i in range(1, 6):
    print("*" * i)
```

---

### 5. Multiplication Table

**Task:** Print table of 5.

**Solution:**

```python
for i in range(1, 11):
    print(f"5 x {i} = {5*i}")
```

---

# ✅ Level 3 – Strings & Lists

### 6. Loop Through a String

**Task:** Print each character of a string.

**Solution:**

```python
text = "Python"
for ch in text:
    print(ch)
```

---

### 7. Loop Through a List

**Task:** Print all fruits in a list.

**Solution:**

```python
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)
```

---

### 8. Count Characters

**Task:** Count total characters in a string.

**Solution:**

```python
text = "programming"
count = 0

for ch in text:
    count += 1

print(count)
```

---

# ✅ Level 4 – Logic Problems

### 9. Find Largest Number

**Task:** Find largest number in a list.

**Solution:**

```python
nums = [10, 45, 22, 90, 15]
biggest = nums[0]

for n in nums:
    if n > biggest:
        biggest = n

print(biggest)
```

---

### 10. Count Even Numbers

**Task:** Count even numbers in a list.

**Solution:**

```python
nums = [1, 2, 3, 4, 5, 6]
count = 0

for n in nums:
    if n % 2 == 0:
        count += 1

print(count)
```

---

# ✅ Level 5 – Mini Programs

### 11. Factorial of a Number

**Task:** Find factorial using `for` loop.

**Solution:**

```python
num = 5
fact = 1

for i in range(1, num+1):
    fact *= i

print(fact)
```

---

### 12. Reverse a String

**Task:** Reverse a string using loop.

**Solution:**

```python
text = "hello"
rev = ""

for ch in text:
    rev = ch + rev

print(rev)
```

---

### 13. Prime Number Check

**Task:** Check if number is prime.

**Solution:**

```python
num = 7
is_prime = True

for i in range(2, num):
    if num % i == 0:
        is_prime = False
        break

if is_prime:
    print("Prime")
else:
    print("Not Prime")
```

---

# 📥 Console Input Example

### 14. Take Input and Print Table

**Solution:**

```python
num = int(input("Enter a number: "))

for i in range(1, 11):
    print(f"{num} x {i} = {num*i}")
```

---

# 🎯 Practice Tips

* Use `range()` properly
* Practice nested loops
* Try without looking at solutions
* Modify programs for better understanding

---

# ✅ Level 6 – Advanced (Nested Loops, Matrices, Patterns)

---

### 15. Number Triangle Pattern

**Task:** Print this pattern:

```
1
12
123
1234
12345
```

**Solution:**

```python
for i in range(1, 6):
    for j in range(1, i+1):
        print(j, end="")
    print()
```

---

### 16. Reverse Star Pattern

**Task:** Print this pattern:

```
*****
****
***
**
*
```

**Solution:**

```python
for i in range(5, 0, -1):
    for j in range(i):
        print("*", end="")
    print()
```

---

### 17. Floyd’s Triangle

**Task:** Print Floyd’s triangle up to 5 rows.

**Solution:**

```python
num = 1

for i in range(1, 6):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()
```

---

### 18. 2D Matrix Printing

**Task:** Print all elements of a 2D list.

**Solution:**

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for item in row:
        print(item, end=" ")
    print()
```

---

### 19. Matrix Sum

**Task:** Find sum of all elements in a matrix.

**Solution:**

```python
matrix = [
    [1, 2],
    [3, 4]
]

total = 0

for row in matrix:
    for item in row:
        total += item

print("Sum:", total)
```

---

### 20. Multiplication Table Grid (1–5)

**Task:** Print multiplication tables from 1 to 5 in grid form.

**Solution:**

```python
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i*j:3}", end=" ")
    print()
```

---

### 21. Check Palindrome Using Loop

**Task:** Check if a string is palindrome.

**Solution:**

```python
text = "madam"
rev = ""

for ch in text:
    rev = ch + rev

if text == rev:
    print("Palindrome")
else:
    print("Not Palindrome")
```

---

### 22. Count Vowels in String

**Task:** Count vowels using loop.

**Solution:**

```python
text = "programming"
vowels = "aeiou"
count = 0

for ch in text:
    if ch in vowels:
        count += 1

print("Vowels:", count)
```

---

### 23. Matrix Transpose

**Task:** Transpose a matrix.

**Solution:**

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

rows = len(matrix)
cols = len(matrix[0])

for i in range(cols):
    for j in range(rows):
        print(matrix[j][i], end=" ")
    print()
```

---

### 24. Hollow Square Pattern

**Task:** Print hollow square.

**Solution:**

```python
n = 5

for i in range(n):
    for j in range(n):
        if i == 0 or i == n-1 or j == 0 or j == n-1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
```

---

Happy Coding! 🚀
