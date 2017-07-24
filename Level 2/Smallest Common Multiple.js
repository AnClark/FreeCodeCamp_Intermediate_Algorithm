/**
 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

 范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
 例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。

 【问题分析】本质是检索给定范围内所有整数共同的最小公倍数。
 */

function smallestCommons(arr) {
    // 预处理：针对给定参数顺序可能颠倒的情况进行修正
    arr = arr.sort(function (a, b){
        return a - b;
    });


    // 第一步：提取最小范围和最大范围，并生成待求数组
    let nums = [];
    for(let i = arr[0]; i <= arr[1]; i++)
        nums.push(i);


    // 第二步：求出待求数组中每个数的倍数表。倍数表作为子数组，集中存放入 multiple_list 中。
    // 倍数表中倍数的上限取 arr 的第二个参数的平方
    let multiple_list = [];
    let multiple_ubound = arr[1] * arr[1] * arr[1] * arr[1];
    for(let i = 0; i < nums.length; i++){
        let curr_list = [];

        for(let j = 1; j <= multiple_ubound; j++){
            curr_list.push(nums[i] * j);
        }

        multiple_list.push(curr_list);
    }

    console.log(multiple_list);

    // 第三步：取得最小公倍数
    // 我的方法：将所有倍数表合并并按顺序排序，找出所有出现次数等于待求数组元素个数的数（即公倍数），并挑出其中最小的

    // 1. 将倍数表合并并排序
    // 合并过程
    let multiple_list_merged = [];
    for(let i = 0; i < multiple_list.length; i++)
        multiple_list_merged = multiple_list_merged.concat(multiple_list[i]);
    // 排序过程
    multiple_list_merged = multiple_list_merged.sort(function (a,b) {
        return a - b;
    });

    // 2. 找出可被待求数组中所有数整除的最小公倍数
    function canBeFullyDivided(dividers, n){
        for(let i = 0; i < dividers.length; i++)
            if(n % dividers[i] !== 0)
                return false;

        return true;
    }

    for(let i = 0; i < multiple_list_merged.length; i++){
        if(canBeFullyDivided(nums, multiple_list_merged[i]))
            return multiple_list_merged[i];
    }

}


console.log(smallestCommons([1,13]))