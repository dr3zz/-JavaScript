/**
 * Created by Yavor Home on 29.7.2014 г..
 */

var button = document.getElementById('btnHideOddRows');
var table = document.getElementsByTagName('TABLE')[0];
button.onclick = function () {
    for (var i = table.rows.length - 1; i >= 0; i--) {
        if (i % 2 == 0) {
            table.deleteRow(i);
        }
    }
}