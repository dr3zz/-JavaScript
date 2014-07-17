/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description Check bit
 */

function bitChecker(value)  {
    var bitCheck;
    var thirdBit =  (value >> 3) & 1;
    if (thirdBit == 1) {
        bitCheck = true;
    }
    else {
        bitCheck = false;
    }

    return bitCheck;
}
console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));
