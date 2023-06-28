let factorial = 1
let num = 10
while (true) {
    factorial *= num
    num--
    if (num === 1) break
}
console.log(factorial) // Factorial de 10 = 3628800

let factorial = 1
for (let i = 10; i > 0; i--) {
    factorial *= i
}
console.log(factorial) // Factorial de 10 = 3628800

let factorial = 1
let num = 10
while (num > 1) {
    factorial *= num
    num--
}
console.log(factorial) // Factorial de 10 = 3628800

