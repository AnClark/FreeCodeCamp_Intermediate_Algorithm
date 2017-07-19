/**
 * Created by AnCla on 2017/7/16.
 *
 * 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
 *
 * 可供参考的资料：Character Entity Reference Chart
 * https://dev.w3.org/html5/html-author/charref
 */

function convert(str) {
    // 定义一张转换表
    const entity_map = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    // 子函数：用正则表达式检索特殊字符，并替换
    function entity_replacer(char, input_str){
        return input_str.replace(new RegExp(char, "g"), entity_map[char]);
    }

    // 第一步：遍历并调用子函数进行替换
    for(var i = 0; i < Object.keys(entity_map).length; i++)
        str = entity_replacer(Object.keys(entity_map)[i], str);

    // 第二步：返回处理后的字符串
    return str;
}

console.log(convert("Dolce & Gabbana"));