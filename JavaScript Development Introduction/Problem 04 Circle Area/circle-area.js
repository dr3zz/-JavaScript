/**
 * Created by Yavor Home on 17.7.2014 г..
 */
function circle_area(r) {
    var area = Math.PI * r * r ;
    return area;
}

var r = 7;
document.write('r = 7; area =' + circle_area(r)+ '<br/>');

var r = 1.5;
document.write('r = 1.5; area =' + circle_area(r)+ '<br/>');
var r = 20;
document.write('r = 20; area =' + circle_area(r));