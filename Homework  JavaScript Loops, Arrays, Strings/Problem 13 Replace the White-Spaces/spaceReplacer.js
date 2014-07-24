/**
 * Created by Yavor Home on 20.7.2014 г..
 */
function replaceSpaces(value) {

    var arr = value.split(' ');
     var result = '';
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}
console.log(replaceSpaces('But you were living in another world tryin\' to get your message through'));