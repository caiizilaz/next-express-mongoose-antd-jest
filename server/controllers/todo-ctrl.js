import TodoModel from '../models/todo-model'

const TodoCtrl = {
  addTodo: (req, res) => {
    let newTodo = new TodoModel({
      item: req.body.item,
      _id: req.body.id
    })
    newTodo.save((err) => {
      if (err) return res.send();
      TodoModel.find({})
        .exec((err, todos) => {
          if (err) return res.send();
          res.json({ todos: todos, success: true })
        })
    })
  },
  editTodo: (req, res) => {
    console.log(req.body)
    TodoModel.findOneAndUpdate({ _id: req.body._id }, { item: req.body.item }, (err) => {
      if (err) return res.send();
      TodoModel.find({})
        .exec((err, todos) => {
          if (err) return res.send();
          res.json({ todos: todos, success: true })
        })
    })
  },
  getTodo: (req, res) => {
    TodoModel.find({})
      .exec((err, todos) => {
        if (err) return res.send();
        res.json({ todos: todos, success: true })
      })
  }
}

export default TodoCtrl