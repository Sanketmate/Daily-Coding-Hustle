let n = 10

let a = 0, b = 1;

// for (let i = 0; i < n; i++) {
//   console.log(a);
//   [a, b] = [b, a + b];
// }

for (let i = 1; i <= n; i++) 
{
    console.log(a + " ")
    let sum = a + b;
    a = b;
    b = sum;
}
