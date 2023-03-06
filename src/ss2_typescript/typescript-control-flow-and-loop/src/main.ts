let sum: number = 0;
let count: number = 0;
for (let i = 2; count < 30; i++) {
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    if(!checkIsPrime(i)){
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);

function checkIsPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}