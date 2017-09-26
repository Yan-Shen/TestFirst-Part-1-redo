function setPropsOnObj(obj) {
    obj.x = 7;
    obj.y = 8;
    obj.onePlus = function (num) {
        return 1+num;
    }
};


function setPropsOnArr(arr) {
    arr.hello = function (){
        return 'Hello!'
    }
    arr.full = 'stack';
    arr[0] = 5;
    arr.twoTimes = function (num){
        return 2*num;
    }
};

function setPropsOnFunc(fnc){
    fnc.year = '20??';
    fnc.divideByTwo = function (num){
        return num /2;
    }
    fnc.prototype.helloWorld = function (){
        return 'Hello World'
    }
}



