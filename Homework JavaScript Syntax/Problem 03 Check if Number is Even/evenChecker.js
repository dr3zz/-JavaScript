/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description : Even Odd Number checker
 */

function evenNumber(value) {
    var checkEven = true;
    if (value % 2==0) {

    }
    else {
        checkEven = false;
    }
    return checkEven;
}

console.log(evenNumber(3));
console.log(evenNumber(127));
console.log(evenNumber(588));