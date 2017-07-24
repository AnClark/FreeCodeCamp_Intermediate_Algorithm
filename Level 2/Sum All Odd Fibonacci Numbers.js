/**
 *  给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

 斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。

 例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。

 提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。

 【资料】斐波那契数列通项公式：
 F(0)=0，F(1)=1, F(n)=F(n-1)+F(n-2)（n>=2，n∈N*）
 */

/**
 * 构建斐波那契递推数列
 * @param UBound，设置要计算到斐波那契数列的第几项
 * @return Array，为递推而来的斐波那契数组
 */
function buildFibArray(UBound){

    // 定义斐波那契数列。数列以索引为通项公式中的自变量，初始项存放入定义中。
    // 初始项为：F(0)=0，F(1)=1
    let fibArray = [0, 1];

    // 开始递推
    for(let i = 2; i <= UBound; i++){
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    // 返回递推而成的斐波那契数列，忽略首项0
    return fibArray.slice(1);
}


function sumFibs(num) {
    // 子函数：判断一个数是否为奇数
    function isOdd(num){
        return num % 2 !== 0;
    }

    // 难点：如何确定要生成长度为多少的斐波那契数列！
    // TODO: 生成斐波那契数列
    let fibArray = buildFibArray(100);

    // 遍历并求奇数和
    let sum = 0;
    for(let i = 0; i < fibArray.length && fibArray[i] <= num; i++)
        sum += isOdd(fibArray[i]) ? fibArray[i] : 0;


    // 返回运算结果
    return sum;
}

console.log(sumFibs(4));

//for(let i = 1; i <= 20; i++)
//    console.log(buildFibArray(i));