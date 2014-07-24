/**
 * Created by Yavor Home on 21.7.2014 г..
 */

function findPalindromes(value) {
    function isPalindrome(word) {
        var reverseValue = word.split("").reverse().join("");
        return reverseValue;
    }

    var str = value.toLowerCase();
    var arr = str.split((/[\W]+/));

    var result = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === isPalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }
    var palindrome = '';
    for (var key in result) {
        if (key == result.length - 1) {
            palindrome += result[key];
        } else {
            palindrome += result[key] + ", ";
        }
    }
    return palindrome;
}

console.log(findPalindromes('There is! a man, his name was Bob.'));