/**
 * Created by Yavor Home on 20.7.2014 г..
 */
function sortArray(arr) {
    function sortDigits(a,b) {
        return a - b ;
    }
    arr.sort(sortDigits);
    return arr;
}
console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));