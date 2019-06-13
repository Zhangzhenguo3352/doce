const express = require('express');
const path = require('path')
const fs = require('fs')

var app = express();



app.use(express.static('public'))

app.get('*', function(req, res) {
    fs.readFile('./data.txt', function (error, data) {
        // <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73 0d 0a>
        // 文件中存储的其实都是二进制数据 0 1
        // 这里为什么看到的不是 0 和 1 呢？原因是二进制转为 16 进制了
        // 但是无论是二进制01还是16进制，人类都不认识
        // 所以我们可以通过 toString 方法把其转为我们能认识的字符
        // console.log(data)
       
        // console.log(error)
        // console.log(data)
       
        // 在这里就可以通过判断 error 来确认是否有错误发生
        if (error) {
          console.log('读取文件失败了')
        } else {
          console.log(data.toString())
            let n = Number(data.toString())
            n++
            fs.writeFile('./data.txt', n, function (error) {
                // console.log('文件写入成功')
                // console.log(error)
                if (error) {
                console.log('写入失败')
                } else {
                console.log('写入成功了')
                }
            })
        }
    })
    res.send()
})
app.listen(80, () => {
    console.log(80)
})