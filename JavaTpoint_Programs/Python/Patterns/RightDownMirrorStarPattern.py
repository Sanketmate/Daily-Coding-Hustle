for i in range(0,7):
    for j in range(0,i):
        print("_",end=" ")
    for k in range(7,i,-1):
        print("*",end=" ")
    print()