/**
 * Created by Yavor Home on 18.7.2014 г..
 * Description print numbers that are not divisible by 4 or by 5;
 */
function printNumbers(n) {
    var result =[];
    var output ='';
    for (var i = 1; i <= n; i++) {
        if (!((i % 4 == 0) || (i % 5 == 0))) {
           result.push(i);
        }
    }
    if (result.length > 0) {
        for(var key in result) {
            if (key == result.length -1) {
                output += result[key];
            }else {
                output += result[key] + ", ";
            }
        }
        return output;
    } else {
        return 'no';
    }

}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));