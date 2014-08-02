/**
 * Created by Yavor Home on 28.7.2014 г..
 */
function reverseWordsInString(str) {
    var output = [];
    var arr =str.split(/[\s]/);;
    for (var i = 0; i < arr.length; i++) {
        var tempStr = arr[i].split('').reverse().join('');
        output.push(tempStr)

    }
    console.log(output.join(" "))

}
reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');