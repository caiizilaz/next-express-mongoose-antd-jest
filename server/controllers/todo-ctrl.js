import TodoModel from '../models/todo-model'

const TodoCtrl = {

  addTodo: (req, res) => {
    let newTodo = new TodoModel({
      item: req.body.item,
      _id: req.body._id
    })
    newTodo.save((err, todos) => {
      if (err) throw err
      res.json({ success: true, todos: todos })
    })
  },

  editTodo: (req, res) => {
    TodoModel.findOneAndUpdate({ _id: req.body._id }, { item: req.body.item }, (err, todos) => {
      if (err) throw err
      res.json({ success: true, todos: todos })
    })
  },

  getTodo: (req, res) => {
    TodoModel.find({}, (err, todos) => {
      if (err) throw err
      res.json({ success: true, todos: todos })
    })
  },

  deleteTodo: (req, res) => {
    TodoModel.remove({ _id: req.params.id }, (err, todos) => {
      if (err) throw err
      res.json({ success: true, todos: todos })
    })
  }



}

export default TodoCtrl