/**
 * Created by AnCla on 2017/7/16.
 * 将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
 *
 * 全新研究之记录——处理非标准句子，形如“thisIsSpinalTap”和“The_Andy_Griffith_Show”：
 * ■ "The_Andy_Griffith_Show".match(/\B[\s_]+/g)
 *      可匹配句中所有获取空格和分隔符“_”
 * ■ "thisIsSpinalTap".match(/\B[A-Z]+/g)
 *      可匹配句中所有大写字母
 * ■ 'this_is_SpinalTap'.match(/\B[A-Z\s_]/g)
 *      上述二者的综合
 */

function test(str){
    return str.match(/\B[A-Z\s_]/g)
}

function spinalCase(str) {
    // 预处理：将空格换成分隔符“_”
    str = str.replace(/\s/g, '_');

    // 第一步：提取出所有单词前界（分隔符、大写字母），作为拆分单词的依据
    var word_foreBounds = str.match(/\B[A-Z_\s]/g);

    // 第二步：获取所有单词前界在 str 中的索引，记录在数组 word_foreBounds.positions 里
    //      单词前界也包含句首字母，以及终点位置（最后一个字母后移一位），以保证能够截取到所有的单词
    word_foreBounds.position = [];

    let currForeBound = 0;      // 当前要扫描的单词前界
    for(let i = 0; i < str.length; i++){
        if(str[i] === word_foreBounds[currForeBound]){
            word_foreBounds.position.push(i);
            currForeBound++;
        }

        if(currForeBound === word_foreBounds - 1)
            break;
    }
    word_foreBounds.position.push(str.length);      // 记录终点位置
    if(word_foreBounds.position[0] !== 0)
        word_foreBounds.position.splice(0, 0, 0);            // 若句首字母所在位置未包含在内，则添加之

    // 第三步：根据 word_foreBounds.position，对 str 调用 slice 方法，截取单词
    let words = [];             // 存放截取而得到的单词
    for(let i = 1; i < word_foreBounds.position.length; i++)
        words.push(str.slice(word_foreBounds.position[i-1], word_foreBounds.position[i]).replace(/[\s_]/g, ''));        // 截取时要去掉分隔符

    // 第四步：将提取出来的单词中每个单词的首字母改为小写
    function deCapitalize(word) {
        if(word === '') return '_';

        // 1. 将单词拆成字符数组
        let charArray = word.split('');

        // 2. 将字符数组的首项改为小写字母
        charArray[0] = charArray[0].toLowerCase();

        // 3. 返回结果
        return charArray.join('');
    }

    for(let i = 0; i < words.length; i++){
        words[i] = deCapitalize(words[i]);
    }

    // 第五步：过滤掉 words 数组中不必要的元素，如分隔符
    words = words.filter(function (p1) {
        return p1.match(/[\s_]/) === null;
    });

    // 第六步：返回最终拼接好的句子，并过滤掉分隔符
    return words.join('-');

    //console.log(word_foreBounds.position);
    //console.log(words);

}

console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase("Teletubbies say Eh-oh") )