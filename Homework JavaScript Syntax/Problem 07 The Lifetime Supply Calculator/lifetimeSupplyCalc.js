/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description life time  supply calculator
 */
function calcSupply(age, maxage, foodPerDay) {
    var result = ((maxage - age) * 365) * foodPerDay;
    var favFood;
    if (foodPerDay == 0.5) {
        favFood = 'chocolate';
    } else if (foodPerDay == 2) {
        favFood = 'fruits';
    }else if (foodPerDay == 1.1) {
        favFood = 'nuts';
    }
    console.log(result + 'kg of ' + favFood + ' would be enough until I am ' + maxage + 'years old.');
}
calcSupply(38, 118, 0.5);
calcSupply(20, 87, 2);
calcSupply(16, 102, 1.1);