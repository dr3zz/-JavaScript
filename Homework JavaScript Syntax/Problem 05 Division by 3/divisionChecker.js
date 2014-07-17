/**
 * Created by Yavor Home on 17.7.2014 г..
 * Description : division checker by 3
 */

function divisionBy3(value) {

    if (value > 9) {
        var sumOfDigits = 0;
        while (value > 0) {
            sumOfDigits += value % 10;
            value = Math.floor(value / 10);
        }
        if (sumOfDigits % 3 == 0) {
            console.log('the number is divided by 3 without remainder');
        } else {
           console.log('the number is not divided by 3 without remainder');
        }
    }
}

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);
