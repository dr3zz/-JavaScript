/**
 * Created by Yavor Home on 19.7.2014 г..
 * Description find maximal sequence of equal elements
 */
function findMaxSequence(arr) {
    var index = arr[0];
    var sequence = 1;
    var longestSequence  = 1;

    for (var i = 1; i < arr.length; i++) {

        if (arr[i - 1] === arr[i]) {
            sequence++;
            if (longestSequence <= sequence) {
                longestSequence = sequence;
                index = arr[i];
            }
        } else {
            sequence = 1;
        }
    }
    var result = [];
    for( var i =0; i < longestSequence;i++) {
        result.push(index);
    }
    return result;
}
console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
console.log(findMaxSequence(['happy']));
