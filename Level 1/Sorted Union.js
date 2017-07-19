/**
 * Created by AnCla on 2017/7/15.
 *
 * 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
 * 换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
 * 非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
 *
 * 【举例】
 * unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) 应该返回 [1, 3, 2, 5, 4]。
 * unite([1, 3, 2], [1, [5]], [2, [4]]) 应该返回 [1, 3, 2, [5], [4]]。
 * unite([1, 2, 3], [5, 2, 1]) 应该返回 [1, 2, 3, 5]。
 * unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 应该返回 [1, 2, 3, 5, 4, 6, 7, 8]。
 *
 */

function unite(arrs) {
    var i, j;
    //console.log(unite.arguments.length);

    // 第一步：将参数中输入的所有数组连缀起来
    var raw_union = [];
    for(i = 0; i < arguments.length; i++)
        raw_union = raw_union.concat(arguments[i]);

    // 第二步：对数组进行去重。被删掉的元素会被标记为 undefined。
    for(i = 0; i < raw_union.length; i++)
        for(j = i+1; j < raw_union.length; j++)
            if(raw_union[j] === raw_union[i])
                raw_union[j] = undefined;

    // 第三步：过滤掉 undefined 值，并返回之
    return raw_union.filter(function(p1){
        return p1 !== undefined;
    });

    //console.log(raw_union);
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));
unite([1, 3, 2], [1, [5]], [2, [4]]);