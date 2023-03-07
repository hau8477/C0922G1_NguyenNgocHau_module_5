let getFibonacci = function (fibonacciIndex: number): number {
    if (fibonacciIndex == 1 || fibonacciIndex == 0) {
        return 1;
    }
    return getFibonacci(fibonacciIndex - 1) + getFibonacci(fibonacciIndex - 2);
}

let sum = 0;

for (let i = 0; i < 10; i++) {
    console.log(getFibonacci(i))
    sum += getFibonacci(i);
}

console.log("Tổng 10 số fibonacci đầu tiên là: " + sum);
