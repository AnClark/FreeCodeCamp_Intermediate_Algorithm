/**
 * 创建一个计算两个参数之和的 function。
 * 如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
 * 例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。


 调用这个有一个参数的返回的 function，返回求和的结果：

 var sumTwoAnd = add(2);

 sumTwoAnd(3) 返回 5。

 如果两个参数都不是有效的数字，则返回 undefined。
 */

function add() {
    /**
     * 子函数：判断给定的参数是否为数字。
     * 原理：运用隐式类型转换——
     *      1. 数字加数字，结果还是数字；
     *      2. 数组或字符串加数字，结果等于字符串。字符串的标志属性是 split；
     *      3. undefined 或 NaN 加数字，结果等于 NaN。 NaN 可用 isNaN 函数来检测。
     * 例外（非严格前提下允许包容，否则要用单独的条件判断将它们排除）：
     *      a. 布尔值视为数字。
     *      b. null 视为数字 0。
     * @param arg
     * @return {boolean}
     */
    function isNumber(arg){
        arg = arg + 3;
        return (!arg.split && !isNaN(arg));
    }

    // 第一步：检查参数个数。
    // 若参数个数为2，则正常返回两个参数相加的值。
    if(arguments.length === 2)
        if(isNumber(arguments[0])  &&  isNumber(arguments[1]))       // 运算前要检查参数是否为数字
            return arguments[0] + arguments[1];
        else
             return undefined;

    // 若参数个数为1，返回一个 function，利用该函数进行后续运算
    else
        if(isNumber(arguments[0])) {
            var num1 = arguments[0];
            return function sumAnotherNumber(num2) {
                if(isNumber(num2))
                    return num1 + num2;
                else
                    return undefined;
            }
        }
        else
            return undefined;
}

function isNumber(arg){
    arg = arg + 3;
    return !arg.split;
}

console.log(isNumber([3]));