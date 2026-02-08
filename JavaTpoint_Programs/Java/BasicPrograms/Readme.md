# 📘 Java Basic Programs – With Solutions & Optimized Approaches

This README contains commonly asked beginner-level Java programs with:

* Problem Statement
* Standard Solution
* Optimized Approach
* Explanation

These programs help build strong fundamentals in Java programming.

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

## 1️⃣ Fibonacci Series in Java

### Problem

Print Fibonacci series up to `n` terms.

### Optimized Solution

```java
import java.util.Scanner;

class Fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int a = 0, b = 1;

        for(int i = 1; i <= n; i++) {
            System.out.print(a + " ");
            int c = a + b;
            a = b;
            b = c;
        }
    }
}
```

### Explanation

* Uses iteration instead of recursion (faster, no stack overflow)
* Time Complexity: **O(n)**

---

## 2️⃣ Prime Number Program

### Problem

Check if a number is prime.

### Optimized Solution

```java
import java.util.Scanner;

class Prime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        boolean isPrime = true;

        if(num <= 1) isPrime = false;

        for(int i = 2; i <= Math.sqrt(num); i++) {
            if(num % i == 0) {
                isPrime = false;
                break;
            }
        }

        System.out.println(isPrime ? "Prime" : "Not Prime");
    }
}
```

### Optimization

* Loop only till √n
* Time Complexity: **O(√n)**

---

## 3️⃣ Palindrome Program

### Problem

Check if a number is palindrome.

### Optimized Solution

```java
import java.util.Scanner;

class Palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        int temp = num, rev = 0;

        while(num != 0) {
            rev = rev * 10 + num % 10;
            num /= 10;
        }

        System.out.println(temp == rev ? "Palindrome" : "Not Palindrome");
    }
}
```

### Explanation

* Reverses number mathematically
* No string conversion (faster)

---

## 4️⃣ Factorial Program

### Problem

Find factorial of a number.

### Optimized Solution

```java
import java.util.Scanner;

class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        long fact = 1;

        for(int i = 1; i <= n; i++) {
            fact *= i;
        }

        System.out.println(fact);
    }
}
```

### Optimization

* Iterative instead of recursive
* Prevents stack overflow

---

## 5️⃣ Armstrong Number

### Problem

Check if a number is Armstrong.

### Optimized Solution

```java
import java.util.Scanner;

class Armstrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        int temp = num, sum = 0;

        while(num != 0) {
            int d = num % 10;
            sum += d * d * d;
            num /= 10;
        }

        System.out.println(temp == sum ? "Armstrong" : "Not Armstrong");
    }
}
```

### Explanation

* Works for 3-digit numbers
* Uses math operations

---

## 6️⃣ Generate Random Number

### Problem

Generate random number.

### Optimized Solution

```java
import java.util.Random;

class RandomNum {
    public static void main(String[] args) {
        Random r = new Random();
        int num = r.nextInt(100); // 0 to 99

        System.out.println(num);
    }
}
```

### Optimization

* Uses `Random` class (better control)

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

```java
class Pattern {
    public static void main(String[] args) {
        int n = 4;

        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

### Explanation

* Nested loops
* Time: O(n²)

---

## 8️⃣ Compare Two Objects

### Problem

Compare two objects in Java.

### Optimized Solution

```java
class Student {
    int id;

    Student(int id) {
        this.id = id;
    }

    public boolean equals(Object obj) {
        Student s = (Student)obj;
        return this.id == s.id;
    }

    public static void main(String[] args) {
        Student s1 = new Student(10);
        Student s2 = new Student(10);

        System.out.println(s1.equals(s2));
    }
}
```

### Optimization

* Override `equals()` method
* Avoids reference comparison

---

## 9️⃣ Create Object in Java

### Problem

Create and use object.

### Solution

```java
class Car {
    String name;

    void show() {
        System.out.println(name);
    }

    public static void main(String[] args) {
        Car c = new Car();
        c.name = "BMW";
        c.show();
    }
}
```

### Explanation

* Uses `new` keyword
* Calls method using object

---

## 🔟 Print ASCII Value

### Problem

Print ASCII value of character.

### Optimized Solution

```java
import java.util.Scanner;

class ASCII {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);

        int ascii = ch;
        System.out.println(ascii);
    }
}
```

### Explanation

* Implicit type casting
* char → int

---

# ✅ Summary

| Program    | Best Optimization |
| ---------- | ----------------- |
| Fibonacci  | Iteration         |
| Prime      | √n Loop           |
| Palindrome | Math Reverse      |
| Factorial  | Loop              |
| Armstrong  | Digit Math        |
| Random     | Random Class      |
| Pattern    | Nested Loop       |
| Compare    | equals()          |
| Object     | new Keyword       |
| ASCII      | Type Casting      |

---

## 🚀 Practice Tip

Try modifying each program:

* Add user input
* Add validation
* Convert to methods
* Use OOP concepts

Happy Coding! 💻🔥
