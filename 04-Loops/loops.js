function repeat(str, num) {
    if (num <=0) {
        return '';
    }
    var result = '';
    for (var i=1; i<=num; i++) {
        result +=str;
    }
    return result;
}

function sum(arr){
    if (arr.length <1) {
        return 0;
    }
    var result =0;
    for (var i=0; i<arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function join(arr, separator) {
    var result =''; 
    if (!separator) {
        for (var i=0; i<arr.length; i++) {
            result += arr[i];
        }
        return result;
    } else {
        for (var i=0; i<arr.length; i++) {
            result += arr[i];
            result += separator;
        }
        return result.slice(0, result.length -1);
    }
}

function gridGenerator(num){
    var result ='';
    for (var j=1; j<=num; j++) {
        if (j%2 === 1) {
            for (var i=1; i<=num; i++) {
                if (i%2 ===1) {
                    result +='#'
                } else {
                    result += ' '
                }      
            }
            result += '\n';
        } else {
            for (var i=1; i<=num; i++) {
                if (i%2 ===1) {
                    result +=' '
                } else {
                    result += '#'
                }      
            }
            result += '\n';
        }        
    }
    return result;
}

function paramify(obj) {
    var result = '';
    var arr =[];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)){
            arr.push(key);
        }
    }
    arr.sort();
    for (var i=0; i<arr.length; i++) {
        result += (arr[i] + '='+obj[arr[i]]);
        result += '&';
    }
    return result.slice(0,result.length-1);
}

function paramifyObjectKeys(obj) {
    var result = '';
    var arr =[];
    arr = Object.keys(obj);
    arr.sort();
    for (var i=0; i<arr.length; i++) {
        result += (arr[i] + '='+obj[arr[i]]);
        result += '&';
    }
    return result.slice(0,result.length-1);
}

function renameFiles(arr){
    if (arr.length <1) {
        return [];
    }
    var result =[];
  var obj = {}
    for (var i=0; i<arr.length; i++) {

        if (arr.slice(0,i).indexOf(arr[i])===-1) {
            obj[arr[i]] = 1;
            result.push(arr[i]);
            
        } else if (obj[arr[i]]) {
          var newFile;
            var helper = function () {
              newFile = arr[i]+'('+obj[arr[i]]+')';
              if (result.indexOf(newFile)!==-1) {
              obj[arr[i]]++;
              helper();
              } 
            }
            helper();
            result.push(newFile);
        }
    }
    return result;
}