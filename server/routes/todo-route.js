import { Router } from 'express'
const router = Router()
import TodoCtrl from '../controllers/todo-ctrl'

router.put('/todo/addtodo', (req, res) => {
  TodoCtrl.addTodo(req, res)
})

router.post('/todo/edittodo', (req, res) => {
  TodoCtrl.editTodo(req, res)
})

router.get('/todo/gettodo', (req, res) => {
  TodoCtrl.getTodo(req, res)
})

router.delete('/todo/deletetodo/:id', (req, res) => {
  TodoCtrl.deleteTodo(req, res)
})

export default router