/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description compare area of house and tree
 */

function treeHouseCompare(a, b) {
    var houseArea = (a * a) + a * (a * 2 / 3) / 2;
    var treeArea = (b * b / 3) + ((b * 2 / 3) * (b * 2 / 3) * Math.PI);
    var biggestArea;
    var figure;
    if (treeArea > houseArea) {
        biggestArea = treeArea;
        figure = 'tree';
    } else if (treeArea < houseArea) {
        biggestArea = houseArea;
        figure = 'house';
    }
    return (figure + '/' + biggestArea.toFixed(2));
}
console.log(treeHouseCompare(3, 2));
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));