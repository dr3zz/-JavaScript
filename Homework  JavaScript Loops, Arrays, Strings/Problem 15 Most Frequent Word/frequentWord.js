/**
 * Created by Yavor Home on 21.7.2014 г..
 */

function findMostFreqWord(value) {
    function checkWord(arr, word) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === word) {
                return false;
            }
        }
        return true;
    }
    var str = value.toLowerCase();
    var arr = str.split(/[\W]+/);
    var count = 1;
    var maxCount = 1;

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
                if (count >= maxCount) {
                    maxCount = count;
                    if (checkWord(result, arr[i]))
                        result.push(arr[i]);
                }
            }
        }
        count = 1;
    }


        for (var a in result) {
            console.log("%s -> %d times", result[a],maxCount);
        }


}
findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');