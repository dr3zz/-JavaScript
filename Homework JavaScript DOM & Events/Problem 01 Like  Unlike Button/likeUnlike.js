/**
 * Created by Yavor Home on 29.7.2014 г..
 */
function f(){
    var button = document.getElementById('btn');
    if (button.innerText =='Like') {
        button.innerText='Unlike'
    } else {
        button.innerText='Like';
    }
}