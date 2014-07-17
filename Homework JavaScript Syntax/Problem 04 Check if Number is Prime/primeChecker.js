/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description : Check if number is prime
 */
function isPrime(value) {
    var max = Math.sqrt(value);
    var isPrime = true;
    if (value  % 2 == 0) {
        if (value == 2) {
            isPrime = true;
        }
        else {
            isPrime = false;
        }
    }
    for (var i = 3; i <= max; i++)
    {
        if((value % i) == 0) {
            isPrime = false;
        }
    }
    return isPrime;
}
console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));