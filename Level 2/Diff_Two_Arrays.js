/**
 * Created by AnCla on 2017/7/15.
 *
 * 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
 */

function diff(arr1, arr2) {
    var i,j;        // 循环变量
    var orig_arr2 = arr2;

    function removeArrayItem(arr, item){
        return arr.filter(function(p1){
            return p1 !== item;
        })
    }

    // 第一步：删除 arr2 中有关 arr1 的所有项
    for(i = 0; i < arr1.length; i++)
        arr2 = removeArrayItem(arr2, arr1[i]);

    // 第二步：同理，也删除 arr1 中有关 arr2 的所有项
    for(i = 0; i < orig_arr2.length; i++)
        arr1 = removeArrayItem(arr1, orig_arr2[i]);

    // 第三步：此时 arr1 和 arr2 两个数组中所剩下的项就是我们想要的结果。
    // 把两个数组拼接即可。
    return arr1.concat(arr2);

}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));