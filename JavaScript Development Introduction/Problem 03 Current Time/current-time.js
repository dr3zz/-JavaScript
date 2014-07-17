/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description current-time program
 */
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (hours < 10) {
    hours = "0" + hours;
}
var result = hours + ":" + minutes;
console.log(result);