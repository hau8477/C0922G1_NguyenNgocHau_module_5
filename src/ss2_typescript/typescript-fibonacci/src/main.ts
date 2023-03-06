let fibonacci = function (a: number): number {
    if (a == 1 || a == 0) {
        return 1;
    }
    return fibonacci(a - 1) + fibonacci(a - 2);
}

let sum = 0;

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i))
    sum += fibonacci(i);
}

console.log("Tổng các số fibonacci từ 0-10 là: " + sum);