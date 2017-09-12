import { Router } from 'express'
const router = Router()
import TodoCtrl from '../controllers/todo-ctrl'

router.get('/todo/gettodo', (req, res) => {
  TodoCtrl.getTodo(req, res)
})

router.post('/todo/addtodo', (req, res) => {
  TodoCtrl.addTodo(req, res)
})

export default router