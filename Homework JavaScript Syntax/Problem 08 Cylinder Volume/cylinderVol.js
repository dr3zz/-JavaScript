/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description straight circular cylinder whit given radius and height
 */
function calcCylinderVol (radius,height) {
    var result = (Math.PI * radius * radius * height).toFixed(3);
    return result;
}
console.log(calcCylinderVol(2,4));
console.log(calcCylinderVol(5,8));
console.log(calcCylinderVol(12,3));