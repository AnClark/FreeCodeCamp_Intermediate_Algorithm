/**
 * 将给定的数字转换成罗马数字。
 * 所有返回的 罗马数字 都应该是大写形式。
 *
 * 参考资料：Roman Numerals
 * http://www.mathsisfun.com/roman-numerals.html
 */

function convert(num) {
    // 构建数字转换表
    const roman_num_map = {
        r_thousands: {
            "1": "M", "2": "MM", "3": "MMM", "4": "MⓋ", "5": "Ⓥ", "6": "ⓋM", "7": "ⓋMM", "8": "ⓋMMM", "9": "MⓍ", "0": ""
        },
        r_hundreds: {
            "1": "C", "2": "CC", "3": "CCC", "4": "CD", "5": "D", "6": "DC", "7": "DCC", "8": "DCCC", "9": "CM", "0": ""
        },
        r_decimals: {
            "1": "X", "2": "XX", "3": "XXX", "4": "XL", "5": "L", "6": "LX", "7": "LXX", "8": "LXXX", "9": "XC", "0": ""
        },
        r_nums: {
            "1": "I", "2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9": "IX", "0": ""
        }
    };

    // 预判断：如果数字不在支持范围内则抛出错误
    if(num <= 0 || num >= 10000)
        throw new RangeError("We only support converting number within [1, 9999].")


    // 第一步：首先将这四位数字进行拆分
    let d_thousand = Math.floor(num / 1000);
    let d_hundred = Math.floor(num / 100 % 10);
    let d_decimal = Math.floor(num / 10 % 10);
    let d_num = Math.floor(num % 10);

    // 第二步：根据数字转换表组合成罗马数字字符串
    let Roman = roman_num_map.r_thousands[d_thousand.toString()]
            + roman_num_map.r_hundreds[d_hundred.toString()]
            + roman_num_map.r_decimals[d_decimal.toString()]
            + roman_num_map.r_nums[d_num.toString()];

    return Roman;
}

convert(58);