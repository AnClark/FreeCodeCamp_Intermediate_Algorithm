/**
 * Created by AnCla on 2017/7/16.
 * 将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
 */

/**
 * 简单版：只能处理标准的句子，也就是单词之间由空格分隔的。
 * @param str
 * @returns {string}
 */
function spinalCase_Basic(str) {
    // 第一步：将句子拆成单词数组
    var word_array = str.split(' ');

    // 第二步：将数组中的每个单词都转化为小写开头
    function toLowerCapital(word){
        // 1. 将单词拆成字母数组
        var char_array = word.split('');

        // 2. 将首字母那一项转化为大写
        char_array[0] = char_array[0].toLowerCase();

        // 3. 返回重新连缀而成的字符串
        return char_array.join('')
    }

    for(var i = 0; i < word_array.length; i++){
        word_array[i] = toLowerCapital(word_array[i]);
    }

    // 第三步：返回通过join方法连缀起来的字符串
    return word_array.join('-');
}

/**
 * 标准版：题目所要求的版本，要求也能处理形如“thisIsSpinalTap”和“The_Andy_Griffith_Show”的句子类型。
 * 但是本算法只能匹配每个单词均以大写开头的句子，对于存在小写开头单词的句子就不管用了。
 * @param str
 */
function spinalCase_deprecated(str) {
    /**
     * 子函数：分词函数
     * 原理：用正则表达式提取出句中所有的字母（含词内连字符“-”），然后将以大写字母开头的串逐个提取出来，重组为单词。
     * @param str 需要处理的句子。
     * @returns Array，存放解析出来的所有单词。
     */
    function extractWordCharArray(str){
        var i,j;            // 循环变量

        // 1. 用正则表达式提取字母。所得结果是一串字符数组。
        // 正则中字符集[A-Za-z-]末尾的“-”是也需要匹配的连字符“-”。
        var letter_chars = str.match(/[A-Za-z-]/g);        // 正则需开启全局匹配，否则至多只会匹配一次。

        // 2. 提取以大写字母开头的字串。大写字母类似于分隔符。
        var words = [];             // 收集所有字串。本数组成员为子数组。
        letter_chars.slicePoint = [];       // 存放单词分割点

        // 子函数：判断一个字符是不是大写字母。
        function isUpperCaseLetter(char){
            return char.match(/[A-Z]/) !== null;
        }

        // 3. 遍历所有字母，记下大写字母所在的索引，以备分割
        // 特殊情形：如果第一个字母不是大写，也需要将第一个单词的分割点加入，否则第一个单词会被漏掉
        if(!isUpperCaseLetter(letter_chars[0]))
            letter_chars.slicePoint.push(0);

        // 一般情形
        for(i = 0; i < letter_chars.length; i++)
            if(isUpperCaseLetter(letter_chars[i]))
                letter_chars.slicePoint.push(i);

        // 最后还要补上最后一个单词的分割点
        letter_chars.slicePoint.push(letter_chars.length);

        // 4. 根据所记下的索引，调用 slice 方法来提取单词字串
        for(i = 1; i < letter_chars.slicePoint.length; i++)
            words.push(letter_chars.slice(letter_chars.slicePoint[i - 1], letter_chars.slicePoint[i]));

        return words;
    }

    // 第一步：将句子解析成单词字符数组
    var word_char_array = extractWordCharArray(str);

    // 第二步：将每一个子数组的首个单字转换为小写，然后组合为单词
    var words_processed = [];
    for(var i = 0; i < word_char_array.length; i++){
        word_char_array[i][0] = word_char_array[i][0].toLowerCase();
        words_processed.push(word_char_array[i].join(''));
    }

    // 第三步：输出最后结果
    return words_processed.join('-');
}

function spinalCase_deprecated2(str) {
    // 第一步：用正则表达式找出句子中的所有单词（单词中可能包含有连字符“-”）
    // 这里使用了边界匹配（\b）。
    var words = str.match(/\B[a-zA-Z0-9-]+/g);

    // 第二步：将提取出来的单词中每个单词的首字母改为小写
    function deCapitalize(word) {
        // 1. 将单词拆成字符数组
        var charArray = word.split('');

        // 2. 将字符数组的首项改为小写字母
        charArray[0] = charArray[0].toLowerCase();

        // 3. 返回结果
        return charArray.join('');
    }

    for(var i = 0; i < words.length; i++)
        words[i] = deCapitalize(words[i]);

    // 第三步：返回结果
    return words.join('-');
}

console.log(spinalCase("Teletubbies say Eh-oh"));