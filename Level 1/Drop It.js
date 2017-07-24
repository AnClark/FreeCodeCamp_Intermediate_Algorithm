/**
 * 让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。
 *
 * 第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，
 * 继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。
 *
 * 最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。
 */

/**
 * 【测试用例】
 * drop([1, 2, 3, 4], function(n) {return n >= 3;}) 应该返回 [3, 4]。
 * drop([0, 1, 0, 1], function(n) {return n === 1;}) 应该返回 [1, 0, 1]。
 * drop([1, 2, 3], function(n) {return n > 0;}) 应该返回 [1, 2, 3]。
 * drop([1, 2, 3, 4], function(n) {return n > 5;}) 应该返回 []。
 * drop([1, 2, 3, 7, 4], function(n) {return n > 3;}) 应该返回 [7, 4]。
 * drop([1, 2, 3, 9, 2], function(n) {return n > 2;}) 应该返回 [3, 9, 2]。
 *
 **/

function drop(arr, func) {
    let i = 0;

    while(func(arr[0]) !== true)
        arr.splice(0, 1);       // 注意，与一般数组方法不同的是，splice方法可以直接修改当前数组，但返回的是被删除后的元素

    return arr;
}

console.log(drop([1, 2, 3, 4], function(n) {return n >= 3;}))