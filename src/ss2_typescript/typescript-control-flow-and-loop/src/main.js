var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    if (!checkIsPrime(i)) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);
function checkIsPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
