/**
 * Created by AnCla on 2017/7/15.
 *
 * 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。

    最小的数字并非总在最前面。
 */

function sumAll(arr) {
    // 第一步：找出给定数组中大的那个数字，以确定范围
    var LBound, UBound;
    if(arr[0] < arr[1]) {
        UBound = arr[1];
        LBound = arr[0];
    }
    else{
        UBound = arr[0];
        LBound = arr[1];
    }


    // 第二步：用循环进行求和
    var sum = 0;
    for(var i = LBound; i <= UBound; i++)
        sum += i;

    // 第三步：输出结果
    return sum;
}

sumAll([1, 4]);