/**
 * Created by Yavor Home on 19.7.2014 г..
 */

function findMaxSequence(arr) {
    var sequence = 1;
    var longestSequence = 1;
    var index = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            sequence++;
            if (longestSequence <= sequence) {
                longestSequence = sequence;
                index = i - sequence + 1;
            }
        } else {
            sequence = 1;
        }
    }

    if (longestSequence == 1) {
        return ('no');
    }

    var result = [];
    while (longestSequence > 0) {
        result.push(arr[index]);
        index++;
        longestSequence--;
    }
    return result;
    console.log(longestSequence);
}
console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));