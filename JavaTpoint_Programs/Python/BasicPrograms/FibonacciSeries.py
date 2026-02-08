# n=10
# a=0
# b=1
# print(a,b)
# for i in range(10):
#     sum=a+b
#     a=b
#     b=sum
#     print(b)


n = int(input("Enter number of terms: "))

a, b = 0, 1

for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b
