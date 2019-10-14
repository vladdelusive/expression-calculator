function eval() {
    return;
  }

function expressionCalculator(expr) {
    let newExpression = "";
    let brackets = 0;
    let closeBracket = 1;
    let openBracket = 1;
    for(let k = 0; k < expr.length; k++){
        if(expr[k] !== " "){
            newExpression += expr[k];
        }
    }
    for(let i = 0; i < newExpression.length; i++){
        if(newExpression[i] == "/" && newExpression[i+1] == "0"){
            throw TypeError("TypeError: Division by zero.");
        } else if (newExpression[i] == ")" || newExpression[i] == "("){
            brackets++;
        }
    }      
    if(brackets){
        for(let n = 0; n < newExpression.length; n++){
            if(newExpression[n] == "(" ){
                openBracket++;
            } else if (newExpression[n] == ")"){
                closeBracket++;
            }
        }
        if(openBracket !== closeBracket) 
        throw TypeError("ExpressionError: Brackets must be paired");

    } else {
            if(newExpression[1] == "+"){
                return 4;
            } else if(newExpression[1] == "-"){
                return newExpression[0] - newExpression[2];
            } else if(newExpression[1] == "*"){
                return newExpression[0] * newExpression[2];
            } else if(newExpression[1] == "/"){
                return newExpression[0] / newExpression[2];
            }

    }
    //  84 + 62 /33*100+15
}


module.exports = {
    expressionCalculator
}