# Create an array (list) of 5 fruits
fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]

# Print the first fruit
print("First fruit:", fruits[0])

# Print the last fruit
print("Last fruit:", fruits[-1])

# Print the length of the array
print("Length of the array:", len(fruits))

# Print all fruits using a loop
print("All fruits:")
for fruit in fruits:
    print(fruit)
# Add a new fruit to the array
fruits.append("Pineapple")
print("After adding Pineapple:", fruits)
# Remove a fruit from the array
fruits.remove("Mango")
print("After removing Mango:", fruits)
# Sort the array of fruits alphabetically
fruits.sort()
print("Sorted fruits:", fruits)
# Reverse the array of fruits
fruits.reverse()
print("Reversed fruits:", fruits)
# Access a slice of the array (first three fruits)
first_three_fruits = fruits[:3]
print("First three fruits:", first_three_fruits)