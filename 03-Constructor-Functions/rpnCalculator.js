function RPNCalculator (){
    this.total = 0;
    this.ele = [];
}

RPNCalculator.prototype.push = function(num){
    this.ele.push(num);
}

RPNCalculator.prototype.plus = function(){
    if (this.ele.length <2) {
        throw 'rpnCalculatorInstance is empty';
    } else {
        this.total = this.ele[this.ele.length-2] + this.ele[this.ele.length-1];
        this.ele.pop();
        this.ele.pop();
        this.ele.push(this.total);
    }
}

RPNCalculator.prototype.value = function(){
    return this.total;
}

RPNCalculator.prototype.minus = function(){
    if (this.ele.length <2) {
        throw 'rpnCalculatorInstance is empty';
    } else {
        this.total = this.ele[this.ele.length-2] - this.ele[this.ele.length-1];
        this.ele.pop();
        this.ele.pop();
        this.ele.push(this.total);
    }
}

RPNCalculator.prototype.divide = function(){
    if (this.ele.length <2) {
        throw 'rpnCalculatorInstance is empty';
    } else {
        this.total = this.ele[this.ele.length-2] / this.ele[this.ele.length-1];
        this.ele.pop();
        this.ele.pop();
        this.ele.push(this.total);
    }
}

RPNCalculator.prototype.times = function(){
    if (this.ele.length <2) {
        throw 'rpnCalculatorInstance is empty';
    } else {
        this.total = this.ele[this.ele.length-2] * this.ele[this.ele.length-1];
        this.ele.pop();
        this.ele.pop();
        this.ele.push(this.total);
    }

}