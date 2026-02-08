# 📘 Java Array Programs – With Solutions & Optimized Approaches

This README contains commonly asked Java array programs with:

* Problem Statement
* Optimized Solution
* Explanation

These programs are useful for interviews and strengthening array concepts.

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

```java
import java.util.Arrays;

class CopyArray {
    public static void main(String[] args) {
        int[] a = {1,2,3,4,5};
        int[] b = Arrays.copyOf(a, a.length);

        System.out.println(Arrays.toString(b));
    }
}
```

### Optimization

* Uses `Arrays.copyOf()`

---

## 2️⃣ Frequency of Each Element

```java
class Frequency {
    public static void main(String[] args) {
        int[] arr = {1,2,2,3,1};
        boolean[] visited = new boolean[arr.length];

        for(int i=0;i<arr.length;i++){
            if(visited[i]) continue;

            int count = 1;
            for(int j=i+1;j<arr.length;j++){
                if(arr[i]==arr[j]){
                    count++;
                    visited[j]=true;
                }
            }
            System.out.println(arr[i]+" -> "+count);
        }
    }
}
```

---

## 3️⃣ Left Rotate Array

```java
class LeftRotate {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        int k = 2;

        for(int i=0;i<k;i++){
            int first = arr[0];
            for(int j=0;j<arr.length-1;j++){
                arr[j]=arr[j+1];
            }
            arr[arr.length-1]=first;
        }

        for(int n:arr)
            System.out.print(n+" ");
    }
}
```

---

## 4️⃣ Print Duplicate Elements

```java
class Duplicates {
    public static void main(String[] args) {
        int[] arr = {1,2,3,2,4,1};

        for(int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                if(arr[i]==arr[j]){
                    System.out.print(arr[i]+" ");
                    break;
                }
            }
        }
    }
}
```

---

## 5️⃣ Print Array Elements

```java
class PrintArray {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4};

        for(int n:arr)
            System.out.print(n+" ");
    }
}
```

---

## 6️⃣ Reverse Array

```java
class Reverse {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4};

        for(int i=arr.length-1;i>=0;i--)
            System.out.print(arr[i]+" ");
    }
}
```

---

## 7️⃣ Even Position Elements

```java
class EvenPos {
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50};

        for(int i=1;i<arr.length;i+=2)
            System.out.print(arr[i]+" ");
    }
}
```

---

## 8️⃣ Odd Position Elements

```java
class OddPos {
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50};

        for(int i=0;i<arr.length;i+=2)
            System.out.print(arr[i]+" ");
    }
}
```

---

## 9️⃣ Largest Element

```java
class Largest {
    public static void main(String[] args) {
        int[] arr = {2,5,1,8,4};

        int max = arr[0];
        for(int n:arr)
            if(n>max) max=n;

        System.out.println(max);
    }
}
```

---

## 🔟 Smallest Element

```java
class Smallest {
    public static void main(String[] args) {
        int[] arr = {2,5,1,8,4};

        int min = arr[0];
        for(int n:arr)
            if(n<min) min=n;

        System.out.println(min);
    }
}
```

---

## 1️⃣1️⃣ Count Elements

```java
class Count {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        System.out.println(arr.length);
    }
}
```

---

## 1️⃣2️⃣ Sum of Elements

```java
class Sum {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4};
        int sum=0;

        for(int n:arr)
            sum+=n;

        System.out.println(sum);
    }
}
```

---

## 1️⃣3️⃣ Right Rotate Array

```java
class RightRotate {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        int k = 2;

        for(int i=0;i<k;i++){
            int last = arr[arr.length-1];

            for(int j=arr.length-1;j>0;j--)
                arr[j]=arr[j-1];

            arr[0]=last;
        }

        for(int n:arr)
            System.out.print(n+" ");
    }
}
```

---

## 1️⃣4️⃣ Sort Ascending Order

```java
import java.util.Arrays;

class SortAsc {
    public static void main(String[] args) {
        int[] arr = {4,2,1,5,3};
        Arrays.sort(arr);

        System.out.println(Arrays.toString(arr));
    }
}
```

---

## 1️⃣5️⃣ Sort Descending Order

```java
import java.util.Arrays;

class SortDesc {
    public static void main(String[] args) {
        Integer[] arr = {4,2,1,5,3};
        Arrays.sort(arr, java.util.Collections.reverseOrder());

        System.out.println(Arrays.toString(arr));
    }
}
```

---

## 1️⃣6️⃣ Find 3rd Largest

```java
import java.util.Arrays;

class ThirdLargest {
    public static void main(String[] args) {
        int[] arr = {4,2,1,5,3};
        Arrays.sort(arr);

        System.out.println(arr[arr.length-3]);
    }
}
```

---

## 1️⃣7️⃣ Find 2nd Largest

```java
import java.util.Arrays;

class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {4,2,1,5,3};
        Arrays.sort(arr);

        System.out.println(arr[arr.length-2]);
    }
}
```

---

## 1️⃣8️⃣ Find Largest Number

```java
import java.util.Arrays;

class MaxNum {
    public static void main(String[] args) {
        int[] arr = {4,2,1,5,3};
        Arrays.sort(arr);

        System.out.println(arr[arr.length-1]);
    }
}
```

---

## 1️⃣9️⃣ Find 2nd Smallest

```java
import java.util.Arrays;

class SecondSmallest {
    public static void main(String[] args) {
        int[] arr = {4,2,1,5,3};
        Arrays.sort(arr);

        System.out.println(arr[1]);
    }
}
```

---

## 2️⃣0️⃣ Find Smallest Number

```java
import java.util.Arrays;

class MinNum {
    public static void main(String[] args) {
        int[] arr = {4,2,1,5,3};
        Arrays.sort(arr);

        System.out.println(arr[0]);
    }
}
```

---

## 2️⃣1️⃣ Remove Duplicates

```java
import java.util.*;

class RemoveDuplicates {
    public static void main(String[] args) {
        int[] arr = {1,2,2,3,1};

        Set<Integer> set = new LinkedHashSet<>();
        for(int n:arr)
            set.add(n);

        System.out.println(set);
    }
}
```

---

## 2️⃣2️⃣ Print Odd & Even Numbers

```java
class OddEven {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};

        System.out.print("Even: ");
        for(int n:arr)
            if(n%2==0) System.out.print(n+" ");

        System.out.print("\nOdd: ");
        for(int n:arr)
            if(n%2!=0) System.out.print(n+" ");
    }
}
```

---

## 2️⃣3️⃣ How to Sort an Array

```java
import java.util.Arrays;

class SortArray {
    public static void main(String[] args) {
        int[] arr = {5,3,1,4,2};
        Arrays.sort(arr);

        System.out.println(Arrays.toString(arr));
    }
}
```

---

# ✅ Summary

| Topic             | Best Practice   |
| ----------------- | --------------- |
| Copy              | Arrays.copyOf() |
| Sort              | Arrays.sort()   |
| Remove Duplicates | Set             |
| Search            | Linear Scan     |
| Rotate            | In-place Loop   |

---

## 🚀 Practice Tips

* Convert programs into methods
* Take user input
* Use HashMap for frequency
* Practice without built-in methods

Happy Coding! 💻🔥
