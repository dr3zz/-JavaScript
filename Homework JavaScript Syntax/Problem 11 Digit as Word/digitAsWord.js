/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description prints the name of a integer number n
 */

function convertDigitToWord(number) {
    if (0 < number && number < 10) {
        var digitWord;
        switch (number) {
            case 1 : digitWord = 'one';break;
            case 2 : digitWord = 'two';break;
            case 3 : digitWord = 'three';break;
            case 4 : digitWord ='four';break;
            case 5 : digitWord = 'five';break;
            case 6 : digitWord = 'six';break;
            case 7 : digitWord = 'seven';break;
            case 8 : digitWord = 'eight';break;
            case 9 : digitWord = 'nine'; break;
            default : digitWord = 'wrong number';break;
        }
        return digitWord ;
    }

}
console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));
