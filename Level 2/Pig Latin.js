/**
 * Created by AnCla on 2017/7/15.
 *
 * 把指定的字符串翻译成 pig latin。
 * Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
 *  如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
 *
 */

function translate(str) {
    // 子函数：检验字母是否为元音字母
    function isVowelLetter(char){
        char = String(char);
        return char.match(/[aeiouAEIOU]/) !== null;
    }

    /** 情形一：首字母为元音字母 **/
    if(isVowelLetter(str[0])){
        return str + "way";
    }

    /** 情形二：首字母为辅音字母 **/

    var i = 0;      // 循环变量

    // 第一步：将单词拆解为字符数组
    var word_letters = str.split('');

    // 第二步：找到单词第一个元音字母所在的索引位置
    while(!isVowelLetter(word_letters[i]))
        i++;

    // 第三步：根据索引位置，对单词进行切片
    var consonant_cluster = word_letters.slice(0, i);
    var the_other_part = word_letters.slice(i);

    // 第四步：重组单词，并添加后缀
    var target = "";

    target = the_other_part.join('');
    target += consonant_cluster.join('');
    target += 'ay';

    // 第五步：返回最后结果
    return target;


}

console.log(translate("california"));

