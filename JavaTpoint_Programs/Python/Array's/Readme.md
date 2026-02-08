# 📘 Python List (Array) Programs – With Solutions & Optimized Approaches

This README contains commonly asked Python list programs with:

* Problem Statement
* Optimized Solution
* Explanation

These programs are useful for interviews and strengthening list/array concepts in Python.

---

## 📌 Table of Contents

1. Copy List
2. Frequency of Elements
3. Left Rotation
4. Duplicate Elements
5. Print List
6. Reverse List
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
23. Sort List

---

## 1️⃣ Copy One List to Another

```python
a = [1, 2, 3, 4, 5]
b = a.copy()

print(b)
```

### Optimization

* Uses built-in `copy()`

---

## 2️⃣ Frequency of Each Element

```python
from collections import Counter

arr = [1, 2, 2, 3, 1]

freq = Counter(arr)
print(freq)
```

### Optimization

* Uses `Counter` (O(n))

---

## 3️⃣ Left Rotate List

```python
arr = [1, 2, 3, 4, 5]
k = 2

k = k % len(arr)
arr = arr[k:] + arr[:k]

print(arr)
```

---

## 4️⃣ Print Duplicate Elements

```python
arr = [1, 2, 3, 2, 4, 1]

dup = set([x for x in arr if arr.count(x) > 1])
print(dup)
```

---

## 5️⃣ Print List Elements

```python
arr = [1, 2, 3, 4]

for x in arr:
    print(x, end=" ")
```

---

## 6️⃣ Reverse List

```python
arr = [1, 2, 3, 4]

arr.reverse()
print(arr)
```

---

## 7️⃣ Even Position Elements

```python
arr = [10, 20, 30, 40, 50]

print(arr[1::2])
```

---

## 8️⃣ Odd Position Elements

```python
arr = [10, 20, 30, 40, 50]

print(arr[0::2])
```

---

## 9️⃣ Largest Element

```python
arr = [2, 5, 1, 8, 4]

print(max(arr))
```

---

## 🔟 Smallest Element

```python
arr = [2, 5, 1, 8, 4]

print(min(arr))
```

---

## 1️⃣1️⃣ Count Elements

```python
arr = [1, 2, 3, 4, 5]

print(len(arr))
```

---

## 1️⃣2️⃣ Sum of Elements

```python
arr = [1, 2, 3, 4]

print(sum(arr))
```

---

## 1️⃣3️⃣ Right Rotate List

```python
arr = [1, 2, 3, 4, 5]
k = 2

k = k % len(arr)
arr = arr[-k:] + arr[:-k]

print(arr)
```

---

## 1️⃣4️⃣ Sort Ascending Order

```python
arr = [4, 2, 1, 5, 3]

arr.sort()
print(arr)
```

---

## 1️⃣5️⃣ Sort Descending Order

```python
arr = [4, 2, 1, 5, 3]

arr.sort(reverse=True)
print(arr)
```

---

## 1️⃣6️⃣ Find 3rd Largest

```python
arr = [4, 2, 1, 5, 3]

arr = list(set(arr))
arr.sort()

print(arr[-3])
```

---

## 1️⃣7️⃣ Find 2nd Largest

```python
arr = [4, 2, 1, 5, 3]

arr = list(set(arr))
arr.sort()

print(arr[-2])
```

---

## 1️⃣8️⃣ Find Largest Number

```python
arr = [4, 2, 1, 5, 3]

print(max(arr))
```

---

## 1️⃣9️⃣ Find 2nd Smallest

```python
arr = [4, 2, 1, 5, 3]

arr = list(set(arr))
arr.sort()

print(arr[1])
```

---

## 2️⃣0️⃣ Find Smallest Number

```python
arr = [4, 2, 1, 5, 3]

print(min(arr))
```

---

## 2️⃣1️⃣ Remove Duplicates

```python
arr = [1, 2, 2, 3, 1]

unique = list(dict.fromkeys(arr))
print(unique)
```

---

## 2️⃣2️⃣ Print Odd & Even Numbers

```python
arr = [1, 2, 3, 4, 5]

even = [x for x in arr if x % 2 == 0]
odd = [x for x in arr if x % 2 != 0]

print("Even:", even)
print("Odd:", odd)
```

---

## 2️⃣3️⃣ How to Sort a List

```python
arr = [5, 3, 1, 4, 2]

arr.sort()
print(arr)
```

---

# ✅ Summary

| Topic             | Best Practice   |
| ----------------- | --------------- |
| Copy              | list.copy()     |
| Frequency         | Counter         |
| Sort              | sort()          |
| Remove Duplicates | dict.fromkeys() |
| Rotate            | Slicing         |

---

## 🚀 Practice Tips

* Convert programs into functions
* Take user input
* Avoid built-ins for practice
* Use NumPy for large arrays

Happy Coding! 🐍💻🔥
