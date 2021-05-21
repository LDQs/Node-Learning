var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = [{
  item: 'get milk'
}, {
  item: 'walk dog'
}];


// 请求相关的由controller进行处理
module.exports = function(app) {
  app.get('/todo', (req, res, next) => {
    res.render('todo', { todos: data });
  })

  app.post('/todo', urlencodedParser, (req, res, next) => {
    data.push(req.body);
    res.json(data);
  })

  app.delete('/todo/:item', (req, res, next) => {
    data = data.filter(todo => {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    })
    res.json(data);
  })
}