function concatString(){
    var result = ''
    for (var i=0; i<arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

function yourFunctionRunner(){
    var result = ''
    for (var i=0; i<arguments.length; i++) {
        result += arguments[i]();
    }
    return result;
}

function makeAdder(num1){
    return function (num2) {
        return num1 + num2;
    }
}

function once(fnc){
    fnc();
    return function(){};
}

function createObjectWithClosures(){
    var val = 0;
    var obj = {}
    obj.oneIncrementer = function(){
        val++;
    }
    obj.tensIncrementer = function(){
        val+=10;
    }
    obj.getValue = function(){
        return val;
    }
    obj.setValue = function(num){
        val = num;
    }
    return obj;
}

function guestListFns(arr, code){
    var resultArr = [];
    var guest;
    for (var i=0; i<arr.length; i++) {
        // the inner function has closure that reference to the looping variable i whose value is set at the end of the looping
        // to lock in the looping variable value, use let
        // or create a middle closure, function executed in the outer function and pass the i to the inner function during looping
        resultArr.push(function(guest){
              return function (password){
                return password === code?  guest: `Secret-Code: Invalid`;    
              }
        }(arr[i]));
    }
    return resultArr;
}

function generateGuestList(arr, code){
    var result = []
    for (var i=0; i<arr.length; i++) {
        result.push(arr[i](code));
    }
    return result;
}