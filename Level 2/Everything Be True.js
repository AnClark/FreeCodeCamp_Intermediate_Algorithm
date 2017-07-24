/**
 * 完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回true。反之，返回false。
 * 记住：你只能通过中括号来访问对象的变量属性(pre)。
 */

function every(collection, pre) {
    // Is everyone being true?

    // 遍历集合中的所有对象
    for(let i = 0; i < collection.length; i++){
        // 第一层滤网：检查所有对象是否存在属性 pre。一旦有不满足者，立刻结束程序
        if(!collection[i].hasOwnProperty(pre))
            return false;

        // 第二层滤网：检查对象的属性 pre 是否为真。一旦有不满足者，立刻结束程序
        if(!Boolean(collection[i][pre]))
            return false;
    }


    // 输出：先前一旦出现不符合条件的对象，就会立刻返回 false。所以通过“重重考验”后予以返回 true。
    return true;
}

console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") )