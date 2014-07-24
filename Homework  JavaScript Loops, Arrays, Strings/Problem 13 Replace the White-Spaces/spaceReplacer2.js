/**
 * Created by Yavor Home on 20.7.2014 г..
 */

function replaceSpaces(value) {
    var re = RegExp(" ","g");
    var result = value.replace(re,"");
    return result;
}
console.log(replaceSpaces('But you were living in another world tryin\' to get your message through'));