/**
 * Created by AnCla on 2017/7/15.
 *
 * 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
 * 如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
 *
 * 【例如】
 * 如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，
 * 第二个参数是 { last: "Capulet" }，
 * 那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。
 */

function where(collection, source) {
    var arr = collection;
    // What's in a name?

    // 总体思路：关键字层筛法。层筛函数如下：
    function filter_by_key_and_value(collection, key, value)
    {
        var filtered_collection = [];

        for(var i = 0; i < collection.length; i++){
            if(collection[i].hasOwnProperty(key)){
                if(collection[i][key] === value){
                    filtered_collection.push(collection[i]);
                }
            }
        }

        return filtered_collection;
    }


    // 开始根据 source 中给出的对象来层筛
    // 1. 提取出 source 中的所有 keys
    source.keys = Object.keys(source);

    // 2. 逐个键值对来层筛

    for(var i = 0; i < source.keys.length; i++){
        arr = filter_by_key_and_value(arr, source.keys[i], source[source.keys[i]]);
    }


    //console.log(filter_by_key_and_value(collection, 'last', 'Capulet'));

    // 最后返回结果
    return arr;
}

console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))