/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description finds if the third digit is  3 (right to left)
 */

function checkDigit(value) {
 if (value > 1000) {
     var num = Math.floor(value / 100) % 10;
     return (num == 3);
 }
}
console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));
