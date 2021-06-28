const calculator = (function(x,y){

    const sum = (x,y) => x + y;

    const substract = (x,y) => x - y;

    const multiply = (x,y) => x * y;

    const divide = (x,y) => x / y;

    return {sum, substract, multiply, divide}

})();

export default calculator;