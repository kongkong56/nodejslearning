//http模块
//http模块是用来创建web服务器的模块，通过http.createServer()方法，变为服务器
//在nodejs中不需要IIS，apache等第三方服务器软件，通过http模块就可以
const http = require('http')
// 创建最基本的web服务器
// 1.导入http模块
// 2.创建web服务器实例
// 3.为服务器实例绑定request事件，监听客户端的请求
// 4.启动服务器
const server = http.createServer()
// 使用on方法可以为服务器绑定一个request事件
server.on('request', (req, res) => {
    //只要有客户端请求我们自己的服务器，就会触发request事件，从而调用这个事件处理函数
    console.log('someone visit our web server')
})
//server.listen(端口号，回调函数)方法，即可启动Web服务器
server.listen(80, () => {
    console.log('http server running at localhost')
})

//只要是服务器接收到了服务端的请求，就会调用server.on(为服务器绑定的request事件处理函数)
//如果想在事件处理函数中，访问与客户端相关的数据或者属性，可以使用以下方式：
server.on('request', function (req, res) {
    // req 是请求对象，她包含了与客户端相关的数据和属性
    //req.url客户端请求的url地址
    //req,method是客户端的请求类型
    const content = "hello world"
    const str = "your request url is ${req.url},and request method is ${req.method}"
    console.log(str)
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    res.end(content)

})