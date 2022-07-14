// ; path模块是nodejs提供的用来处理路径的模块，他提供了一系列的方法和属性，用来满足用户对路径的处理需求
// ; path.join()用来将多个路径片段拼接成一个完整的路径字符串
// ; path.basename()方法，用来从路径字符串中，将文件名解析出来
const path = require('path')
// 1.path.join([...paths])
//...paths<string>路径片段的序列
//返回值：string
const pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2) // output: 当前文件所处目录\files\1.txt
//../具有抵消前面路径的作用，./没有抵消路径的作用
//凡是涉及到路径拼接的操作，都要使用path.join()方法进行处理，不要使用+进行字符串拼接

// 2.path.basename()
//使用path.basename()方法，可以获取路径中的最后一部分，通常用来获取路径中的文件名
//path.basename(path[, ext])
//path是必选参数，表示路径的字符串
//ext 可选参数，表示文件扩展名
//返回 string 表示路径中的最后一部分

const fpath = 'a/b/v/index.html'
var fullName = path.basename(fpath)
console.log(fullName) //输出index.html

var nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) // 输出  index

// 3.path.extname() 获取路径中的扩展名部分
//path.extname(path)
//path: 表示路径的字符串
//返回 扩展名
const extname = path.extname(fpath)
console.log(extname) //输出 .html 