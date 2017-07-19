/**
 * Created by AnCla on 2017/7/15.
 *
 * 从传递进来的字母序列中找到缺失的字母并返回它。
 * 如果所有字母都在序列中，返回 undefined。
 */

function fearNotLetter(str) {
    var i, j;

    // 第一步：先将输入的字母字符串转换成ASCII值数组
    var ascii_array = [];
    for(i = 0; i < str.length; i++)
        ascii_array.push(str[i].charCodeAt(str[i]));

    // 第二步：对ASCII值数组进行排序（字母升序）
    ascii_array = ascii_array.sort(function (a, b){
        return a - b;
    });


    // 第三步：查找缺失的字母
    // 最简单的方法：两两比较 ascii_array 的值，如果二者差值有大于一的，就说明存在缺失字母。
    var lacks = [];
    for(i = 0; i < ascii_array.length - 1; i++){
        if(ascii_array[i+1] - ascii_array[i] > 1){
            for(j = ascii_array[i] + 1; j < ascii_array[i+1]; j++)
                lacks.push(j);
        }
    }

    // 第四步：将缺失字母的ASCII值转换为对应字符
    for(i = 0; i < lacks.length; i++)
        lacks[i] = String.fromCharCode(lacks[i]);

    //console.log(lacks);

    // 第五步：如果确实存在缺失字母，则返回答案所要求的字符串；
    //          否则返回 undefined。
    return lacks.length > 0 ? lacks.join('') : undefined;
}

fearNotLetter("abcdefghjklmno");