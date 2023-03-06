var fibonacci = function (a) {
    if (a == 1 || a == 0) {
        return 1;
    }
    return fibonacci(a - 1) + fibonacci(a - 2);
};
var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng các số fibonacci từ 0-10 là: " + sum);
