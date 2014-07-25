/**
 * Created by Yavor Home on 23.7.2014 г..
 */
function Solve(args) {

    Array.prototype.clean = function (deleteValue) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == deleteValue) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    };

    var input = [];
    input = args[0].split('(');

    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].replace(/\)/g, '');
        input[i] = input[i].replace(/' '/g, '');
    }
    var newArr = input.clean('');
    var numbers = [];
    numbers = newArr.map(Number);
    //Solving
    var bestLen = 0;
    var len = 0;
    var shouldBeOdd = numbers[0] % 2 !== 0;
    for (var i = 0; i < numbers.length; i++) {
        var isOdd = numbers[i] % 2 !== 0;
        if ( numbers[i] === 0 || isOdd === shouldBeOdd ) {
            len++;
        } else {
            shouldBeOdd = isOdd;
            len = 1;
        }
        shouldBeOdd = !shouldBeOdd;
        if (len > bestLen) {
            bestLen = len;
        }
    }
    return bestLen;
}
//console.log(Solve(['3) (22) (-18) (55) (44) (3) (21)']));
//console.log(Solve(['-0 -1 -2 -3 00 2']));
//console.log(Solve(['  ( 2 )  ( 33 ) (1) (4)   (  -1  ) ']));
//console.log(Solve(['(102)(103)(0)(105) (0) () 0 (107)(1)']));
//console.log(Solve(['(2) (2) (2) (2) (2)']));
//console.log(Solve(['0,0,1,3,0,2']));
console.log(Solve(['(4) (44) (0) (21) (332) (34)']));
console.log(Solve(['(102)(103)(0)(104)  (107)(1)']));