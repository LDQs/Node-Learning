var express = require('express');

var app = express();
// 指定使用的模板引擎
app.set('view engine', 'ejs');

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