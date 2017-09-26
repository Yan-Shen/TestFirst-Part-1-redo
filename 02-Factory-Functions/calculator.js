function createCalculator(){
    return {
        total: 0,
        value: function(){
            return this.total;
        },
        add: function (num){
            return this.total +=num;
        },
        subtract: function (num){
            return this.total -=num;
        },
        clear: function (){
            this.total = 0;
        }
    };
}