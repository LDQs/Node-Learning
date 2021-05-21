var express = require('express');

var app = express();
// 指定使用的模板引擎
app.set('view engine', 'ejs');

// 响应静态文件, 访问这个路径http://localhost:3000/cool.jpg就可以查看到静态文件
app.use(express.static('public'));

// 第一个中间件
app.use(function(req, res, next) {
  console.log('first middleware');
  next(); // next()为传递给下一个中间件
  console.log('first middleware after'); // 输出顺序为(洋葱模式): first middleware -> second middleware -> second middleware after -> first middleware after
})
// 第二个中间件
app.use(function(req, res, next) {
  console.log('second middleware');
  next();
  console.log('second middleware after');
})

app.get('/', function(req, res, next) {
  res.send('ok');
})

app.get('/api/:id', function(req, res) {
  res.send(req.params.id);
});

app.get('/template', function(req, res) {
  let data = {
    name: 'ldq',
    age: 18,
    hobbies: ['eating', 'sleeping', 'playing']
  }
  // 渲染模板页面template.ejs
  res.render('template', { data: data });
});

app.get('/about', function(req, res) {
  let data = {
    name: 'ldq',
    age: 18,
    hobbies: ['eating', 'sleeping', 'playing']
  }
  // 渲染模板页面template.ejs
  res.render('about', { data: data });
});

app.listen(3000);
console.log('listening in port 3000');