/**
 * Created by Yavor Home on 22.7.2014 г..
 */

function findCardFrequency(value) {
    var arr = value.split(/[\W]+/);
    arr.pop();
     var total = 0;
    var str = {};
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        str[arr[i]] = count;
    }
    for (var a in str){
        total += str[a];
    }
    for ( var a in str){
        var percentResult = (str[a] / total  * 100);
        console.log("%s -> %s%" , a , percentResult.toFixed(2));
    }
}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');

findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');

findCardFrequency('10♣ 10♥');