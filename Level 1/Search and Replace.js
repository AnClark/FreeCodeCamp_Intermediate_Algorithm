/**
 * Created by AnCla on 2017/7/15.
 *
 * 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
 *
 * 第一个参数是将要对其执行查找和替换的句子。
 * 第二个参数是将被替换掉的单词（替换前的单词）。
 * 第三个参数用于替换第二个参数（替换后的单词）。
 *
 * 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
 *
 */

function myReplace(str, before, after) {
    // 将单词 src 的首字母大写同步到 target 中
    function syncCapitalLetter(src, target){
        function hasCapitalLetter(word){
            return word[0].toUpperCase() === word[0];
        }

        if(hasCapitalLetter(src)){
            // 先将目标单词拆成字母
            var target_letters = target.split('');

            // 然后将目标单词的第一个字母转换成大写
            target_letters[0] = target_letters[0].toUpperCase();

            // 最后重组为单词，并输出
            return target_letters.join('');

        }
        else{
            return target;
        }

    }

    // 粗略步骤：
    // 第一步： 将句子拆成单词数组
    var word_array = str.split(' ');

    // 第二步：用正则表达式查找并替换——运用 replace 方法
    for(var i = 0; i < word_array.length; i++){
        var rexp = new RegExp(before, 'i');

        word_array[i] = word_array[i].replace(rexp, syncCapitalLetter(before, after));
    }

    // 第三步：将进行替换后的单词数组重组为字符串
    return word_array.join(' ');


}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));