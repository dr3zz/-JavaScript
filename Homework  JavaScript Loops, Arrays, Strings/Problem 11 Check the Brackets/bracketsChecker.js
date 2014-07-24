/**
 * Created by Yavor Home on 20.7.2014 г..
 */

function checkBrackets(value) {
    var leftBr = '(';
    var rightBr = ')';
    var countLeft = 0;
    var coutnRight = 0;

    for (var i = 0;i< value.length;i++) {
        if (value[i] == leftBr) {
            countLeft++;
        }else if (value[i] == rightBr) {
            coutnRight++;
        }
    }
    if(countLeft==coutnRight) {
        return 'correct';
    }else {
        return 'incorrect';
    }
}
console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));