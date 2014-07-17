/**
 * Created by Yavor Home on 17.7.2014 г..
 */
function variablesTypes(input) {
    console.log("My name: %s //type is %s \nMy age: %s //type is %s \nI am male: %s //type is %s \nMy favourite foods are: %s //type is %s",
        input[0], typeof(input[0]), input[1], typeof(input[1]), input[2], typeof(input[2]), input[3].toString(), typeof(input[3]));
    console.log("My name: " + input[0] + ' //type is ' + typeof(input[0]) );
    console.log("My age: " + input[1] + ' //type is ' + typeof(input[1]) );
    console.log("I am male: " + input[2] + ' //type is ' + typeof(input[2]) );
    console.log("My favorite foods are: " + input[3] + ' //type is ' + typeof(input[3]) );
}
variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']])