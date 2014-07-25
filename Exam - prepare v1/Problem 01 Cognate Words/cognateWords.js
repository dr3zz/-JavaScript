/**
 * Created by Yavor Home on 23.7.2014 г..
 */

function Solve(args) {
    function checkRepeatWord(a , b){
        for( var i = 0 ; i < a.length ; i++){
            if(a[i] === b){
                return false;
            }

        }
        return true;
    }
    var string = args[0];
//    var arr1 = string.split(/\W/g);
    var arr1 = string.split(/[^a-zA-Z]+/);
    Array.prototype.clean = function(deleteValue) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == deleteValue) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    };
    var result ='';
    var array =[] ;
    var arr = arr1.clean('');
    for(var i = 0; i < arr.length;i++) {
        for (var j =0;j < arr.length;j++) {
            for (var k = 0;k< arr.length;k++) {
                var str = arr[i] + "" + arr[j];
                    if (str === arr[k]){
                        if(i!=j) {
                            var tempStr = arr[i] + "|" + arr[j] + "=" + str;

                            if(checkRepeatWord(array,tempStr)){
                                array.push(arr[i] + "|" + arr[j] + "=" + str);
                            }
                        }
                    }
                }
            }
        }
//    array.sort();
     if (array.length == 0) {
        result +='No';
     } else {
         for(var i =0;i < array.length;i++) {
             if (i < array.length - 1) {
                 result+=array[i] +'\n';
             } else {
                 result +=array[i];
             }

         }
     }
//    console.log(typeof result)
    return result;
}

console.log(Solve(['java..?|basics/*-+=javabasics']));
console.log(Solve(['Hi, Hi, Hihi']));
console.log(Solve(['[Uni(lo,.ve=I love SoftUni (Soft)']));
console.log(Solve(['a a aa a']));
console.log(Solve(['x a ab b aba a hello+java a b aaaaa']));
console.log(Solve(['aa bb bbaa']));
console.log(Solve(['ho hoho']));