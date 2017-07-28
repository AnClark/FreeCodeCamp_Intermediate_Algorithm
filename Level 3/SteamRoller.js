/**
 * 对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
 * 举例：steamroller([1, [2], [3, [[4]]]]) 应该返回 [1, 2, 3, 4]。
 */

function steamroller(arr) {

    let steamrolled_array = [];

    function steamroller_call(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array)
                steamroller_call(arr[i]);
            else
                steamrolled_array.push(arr[i]);
        }
    }

    steamroller_call(arr);

    return steamrolled_array;
}

console.log(steamroller([1, [2], [3, [[4]]]]));
console.log(steamroller([[["a"]], [["b"]]]));