const fs = require('fs')
//fs.readFile()读取指定文件中的内容
//fs.readFile(path[, options], callback)
// path: 代表路径，string
// options: 可选参数，编码格式
// callback:读取完成后，通过回调函数拿到读取的内容
//1.以utf-8读取文件内容，打印err和datastr的值
// fs.readFile('./1.txt', 'utf8', function (err, datastr) {
//     //err 读取失败返回的内容,
//     //datastr 读取成功返回的内容,
//     //读取失败，err的值为错误的对象，datastr的值为undefined
//     //读取成功err的值为Null
//     console.log(err)
//     console.log('---------')
//     console.log(datastr)
//     if (err) {
//         return console.log('文件读取失败' + err.message)
//     }
//     console.log('文件读取成功' + datastr)
// })

//fs.writeFile()向指定文件写入内容
//fs.writeFile(file,data[,options],callback)
// file: 文件路径的字符串，表示文件的存放路径
// data：要写入的内容
// options: 以什么格式写入文件内容，默认值是utf8
// callback: 写入完成后的回调函数
fs.writeFile('./444.txt', 'hello world', function (err) {
    //如果文件写入成功，err为null
    //如果写入失败，err为错误的对象类型
    //方法会自动创建文件
    // if (err) {
    //     return console.log('文件写入失败' + err.message)
    // }
    console.log('文件写入成功')
})
//fs操作文件时候，如果提供的操作环境是以./或者../开头的相对路径时候，很容易出现路径问题
//原因：代码在运行的时候，会以执行node命令所处的目录，动态拼接出被操作文件的完整路径//
//__dirname 表示当前文件所处的目录
console.log(__dirname)
fs.readFile(__dirname + '/444.txt', 'utf8', function (err, datastr) {
    //err 读取失败返回的内容,
    //datastr 读取成功返回的内容,
    //读取失败，err的值为错误的对象，datastr的值为undefined
    //读取成功err的值为Null
    console.log(err)
    console.log('---------')
    console.log(datastr)
    if (err) {
        return console.log('文件读取失败' + err.message)
    }
    console.log('文件读取成功' + datastr)
})
//注意事项
// fs.writeFile()方法只能用来创建文件，不能用来创建路径
// 重复调用fs.writeFile()方法写入同一个文件，新写入的内容会覆盖之前的内容