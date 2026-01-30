function square(numbers) {
    return numbers*numbers;
}


result= square(2)
console.log(result) // This functions return square of functions

function findArea(lenght,width) {
    return lenght*width;
}

result = findArea(2,5);
console.log(result) // Area

function isEven(numbers) {
    if (numbers%2==0) {
        console.log("Even")
    }else{
        console.log("Odd")
    }
}

isEven(3)

function sum(a,b) {
    return a+b;
}
sum(1,2)
r=sum(3,3)
console.log(r)
console.log(sum)

function displaySum(a,b) {
    console.log(a+b)
}
displaySum(3,5)