# /_____*
# /____**
# /___***
# /__****
# /_*****
# /******

for i in range(0,7):
    for j in range(6,i,-1):
        print("_",end=" ")
    for k in range(0,i+1):
        print("*",end=" ")
    print()