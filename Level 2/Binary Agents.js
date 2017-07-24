/**
 * 传入二进制字符串，翻译成英语句子并返回。
 * 二进制字符串是以空格分隔的。
 */

/**
 * 将二进制字符串转换为十进制数字
 * @param bin_str 要转换的二进制**字符串**。
 * @return Number 转换而来的十进制数字。
 */
function BinStr2Dec(bin_str){
    // 第一步：将字符串拆解为字符数组
    let bin_char_array = bin_str.split('');

    // 第二步：用 Number 对象将每个字符转换为数字，然后用转换公式累加
    let dec = 0;
    for(let i = bin_char_array.length - 1; i >= 0; i--){
       dec += Number(bin_char_array[bin_char_array.length - 1 - i]) * Math.pow(2, i);
    }

    // 第三步：输出结果
    return dec;
}

function binaryAgent(str) {
    // 第一步：分解出所有二进制字符串
    let bin_arrs = str.split(' ');

    // 第二步：即时将每个二进制字符串转换为十进制ASCII码，进而转换为该ASCII码对应的字符
    let str_output = "";
    for(let i = 0; i < bin_arrs.length; i++){
        str_output += String.fromCharCode(BinStr2Dec(bin_arrs[i]));
    }

    // 第三步：返回结果

    // FOR DEBUG
    console.log(str_output);

    return str_output;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") //应该返回 "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") //应该返回 "I love FreeCodeCamp!"