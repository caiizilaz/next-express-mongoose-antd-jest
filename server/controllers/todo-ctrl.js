import TodoModel from '../models/todo-model'

const TodoCtrl = {
  getTodo: (req, res) => {
    TodoModel.find({})
      .exec((err, todos) => {
        if (err) return res.send();
        res.json({ todos: todos, success: true })
      })
  },
  addTodo: (req, res) => {
    let newTodo = new TodoModel({
      item: req.body.item
    })
    newTodo.save((err) => {
      if (err) return res.send();
      TodoModel.find({})
        .exec((err, todos) => {
          if (err) return next(err)
          res.json({ todos: todos, success: true })
        })
    })
  }
}

export default TodoCtrl