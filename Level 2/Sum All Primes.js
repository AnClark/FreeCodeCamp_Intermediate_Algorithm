/**
 * 求小于等于给定数值的质数之和。

 只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

 给定的数不一定是质数。
 */

function sumPrimes(num) {
    // 子函数：判断一个数是否为质数
    // 只需在 2 ~ √(n) 的范围枚举即可
    function isPrime(n){
        for(let i = 2; i <= Math.sqrt(n); i+=1)
            if(n % i === 0)
                return false;
        return true;
    }


    // 直接逐一判断给定范围内的所有整数，若为质数，则加之
    let sum = 0;
    for(let i = 2; i <= num; i++){
        if(isPrime(i))
            sum += i;
    }

    // 返回最后结果
    return sum;
}

//for(let i = 1; i <= 20; i++)
//    sumPrimes(i);

console.log(sumPrimes(977))