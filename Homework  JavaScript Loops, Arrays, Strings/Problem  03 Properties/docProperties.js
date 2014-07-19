/**
 * Created by Yavor Home on 19.7.2014 г..
 * Description display all the properties of the document in alphabetical order
 */
function displayProperties(value) {
    var arr = [];
   for(var key in value) {
        arr.push(key);
   }
    arr.sort();
    return arr;
}
console.log(displayProperties(document).join('\n'));